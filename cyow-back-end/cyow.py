from __future__ import absolute_import
from _Framework.ControlSurface import ControlSurface

class Cyow(ControlSurface):
    def __init__(self):
        super(Cyow, self).__init__(c_instance)
        self.