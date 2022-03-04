from __future__ import absolute_import

from _Framework.ControlSurface import ControlSurface
import socket
import os
import json

from server import Session


class Cyow(ControlSurface):
    def __init__(self, c_instance):
        super(Cyow, self).__init__(c_instance)
        Session.log_message(self.log_message)
        self.schedule_message(1, self.init_server)

    def init_server(self):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setblocking(0)
        self.log_message("Binding awesome socket...")
        self.server_socket.bind(("127.0.0.1", 9000))
        self.log_message("Listening on cool socket...")
        self.server_socket.listen(1)
        self.recursive_server_loop()

    def handle_connection(self):
        try:
            client_socket, address = self.server_socket.accept()
            self.log_message(f"Socket established with {address}")
            session = Session(client_socket, address)
            session.run()
        except socket.error as err:
            return

    def recursive_server_loop(self):
        self.handle_connection()
        self.schedule_message(1, self.recursive_server_loop)
