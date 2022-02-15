from __future__ import absolute_import
import imp
from _Framework.ControlSurface import ControlSurface
from .server import Server


class Cyow(ControlSurface):
    def __init__(self):
        super(Cyow, self).__init__(c_instance)
        self.server = Server()
