from __future__ import absolute_import
import sys
from .cyow_main import Cyow


def create_instance(c_instance):
    return Cyow(c_instance)
