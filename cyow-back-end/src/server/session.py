import socket
import threading
from .http_parse import HttpRequestParser
from .wsgi import WSGIRequest, WSGIResponse
from ..application.app import app


class Session:
    def __init__(self, client_socket, address):
        self.client_socket = client_socket
        self.address = address
        self.parser = HttpRequestParser(self)
        self.request = WSGIRequest()
        self.response = WSGIResponse()

    @staticmethod
    def set_log_function(function):
        Session.log_message = function

    def run(self):
        while True:
            if self.response.is_sent:
                break
            data = self.client_socket.recv(1024)
            self.log_message(f"Received {data}.")
            self.parser.feed_data(data)
        self.client_socket.close()
        self.log_message(f"Socket with {self.address} closed.")

    def on_url(self, url: bytes):
        self.log_message(f"Received url: {url}")
        self.request.http_method = self.parser.http_method.decode("utf-8")
        self.request.path = url.decode("utf-8")

    def on_header(self, name: bytes, value: bytes):
        self.log_message(f"Received header: ({name}, {value})")
        self.request.headers.append((name.decode("utf-8"), value.decode("utf-8")))

    def on_body(self, body: bytes):
        self.log_message(f"Received body: {body}")
        self.request.body.write(body)
        self.request.body.seek(0)

    def on_message_complete(self):
        self.log_message("Received message completely.")
        environ = self.request.to_environ()
        body_chunks = app(environ, self.response.start_response)
        self.log_message("App callable has returned")
        self.response.body = b"".join(body_chunks)
        self.client_socket.send(self.response.to_http())
