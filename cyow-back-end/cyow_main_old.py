from __future__ import absolute_import

from _Framework.ControlSurface import ControlSurface
import socket
import os
import json


class Cyow(ControlSurface):
    def __init__(self, c_instance):
        super(Cyow, self).__init__(c_instance)
        self.root_dir = os.path.dirname(os.path.abspath(__file__))
        self.schedule_message(1, self.init_server)

    def init_server(self):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setblocking(0)
        self.log_message("Binding awesome socket...")
        self.server_socket.bind(("127.0.0.1", 9000))
        self.log_message("Listening on cool socket...")
        self.server_socket.listen(5)
        self.recursive_server_loop()

    def handle_connection(self):
        try:
            (client_connection, client_address) = self.server_socket.accept()
            self.log_message("Connection found")
            request_string = client_connection.recv(2048).decode("UTF-8")
            headers = request_string.split("\n")
            http_method = headers[0].split()[0]
            filename = headers[0].split()[1]
            self.log_message("Filename from headers:" + filename)
            self.log_message("Method:" + http_method)
            if filename == "/":
                self.log_message("Identified root.")
                filename = r"\index.html"
                file_path = self.root_dir + r"\build" + filename
                self.log_message("Cwd:" + self.root_dir)
                self.log_message("File path:" + file_path)
                file_to_serve = open(file_path)
                file_content = file_to_serve.read()
                file_to_serve.close()
                response = "HTTP/1.0 200 OK\n\n" + file_content
                client_connection.sendall(response.encode())

            elif filename == "/api/tempo" and http_method == "GET":
                currentTempo = round(self.song().tempo, 2)
                self.log_message("Fetched tempo from Live:" + str(currentTempo))
                self.log_message("Tempo variable type: %s", type(currentTempo))
                response_dict = {"tempo": currentTempo}
                response_json = json.dumps(response_dict)
                response = "HTTP/1.0 200 OK\n\n" + response_json
                client_connection.sendall(response.encode())
                self.log_message("Sent object: %s", json.loads(response_json))

            elif filename == "/api/tempo" and http_method == "POST":
                request_body = request_string.split("\r\n\r\n")
                self.log_message("Request body:")
                self.log_message(request_body)
                request_dict = json.loads(request_body[1])
                self.song().tempo = float(request_dict["tempo"])
                response = "HTTP/1.0 200 OK\n\n"
                client_connection.sendall(response.encode())

            else:
                file_path = self.root_dir + r"\build" + filename
                self.log_message("Cwd:" + self.root_dir)
                self.log_message("File path:" + file_path)
                try:
                    file_to_serve = open(file_path)
                    file_content = file_to_serve.read()
                    file_to_serve.close()
                    response = "HTTP/1.0 200 OK\n\n" + file_content
                    client_connection.sendall(response.encode())
                except:
                    response = "HTTP/1.0 200 OK\n\n"
                    client_connection.sendall(response.encode())

        except socket.error as err:
            return

    def recursive_server_loop(self):
        self.handle_connection()
        self.schedule_message(1, self.recursive_server_loop)
