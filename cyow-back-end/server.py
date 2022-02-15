import socket


class Server:
    def __init__(self, localhost="127.0.0.1", localport=9000):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setblocking(0)
        self.bind((localhost, localport))
        self.server_socket.listen(5)
        self.recursive_server_loop()

    def recursive_server_loop(self):
        self.handle_connection()
        self.schedule_message(1, self.recursive_server_loop)

    def handle_connection(self):
        client_socket, address = self.server_socket.accept()
