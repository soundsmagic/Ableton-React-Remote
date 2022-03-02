from __future__ import absolute_import

from _Framework.ControlSurface import ControlSurface
import socket
import os
import json
import threading
import queue
import sys

sys.path.insert(0, "C:\\Users\\john-\\AppData\\Local\\Programs\\Python\\Python310\\Lib\\site-packages")

from flask import Flask

# Webb-relaterat
# Använder Flask här men skulle lika väl kunna vara t.ex. FastAPI
# Du behöver inte ha något mer avancerat än den inbyggda debug-servern
# eftersom du hanterar så lite (en person) trafik
app = Flask(__name__)
threading.Thread(
    target=lambda: app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=False)
).start()
tasks = queue.Queue()
output = queue.Queue()


@app.get("/")
def main():
    # Här returnerar du index.html osv
    # Du kan också ställa in Flask att returnera alla filer från build/ eller static/
    return "Hello world"


@app.get("/api/tempo")
def tempo():
    # När anropet kommer in läggs ett kommando på tasks-kön.
    # Denna tuple skulle kunna innehålla mer om du t.ex. vill POSTa argument osv
    tasks.put(("tempo",))

    # Förutsätter att bara ett API-anrop kommer in i taget
    # Om det är fler behöver vi ge dem ett ID eller liknande
    return output.get()


# Musik-relaterat
class Cyow(ControlSurface):
    def __init__(self, c_instance):
        super(Cyow, self).__init__(c_instance)
        self.root_dir = os.path.dirname(os.path.abspath(__file__))
        self.schedule_message(1, self.init_server)

    def init_server(self):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setblocking(0)
        self.server_socket.bind(("127.0.0.1", 9000))
        self.server_socket.listen(5)
        self.recursive_server_loop()

    def handle_connection(self):
        try:
            # Finns det någon task?
            task = tasks.get_nowait()

            # Är det en tempo task?
            if task[0] == "tempo":
                # Vi skulle kunna kolla len(task) för att veta om det var en GET
                # eller POST request, men har bara implementerat GET varianten nu
                currentTempo = round(self.song().tempo, 2)
                response_dict = {"tempo": currentTempo}
                response_json = json.dumps(response_dict)
                output.put(response_json)

        except queue.Empty:
            # Inga tasks att utföra
            return

        except socket.error as err:
            return

    def recursive_server_loop(self):
        self.handle_connection()
        self.schedule_message(1, self.recursive_server_loop)
