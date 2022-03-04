from ast import Call
from typing import Callable
from dataclasses import dataclass


class WSGIApplication:
    def __init__(self) -> None:
        self.path_operations = dict()

    def _register_path_operations(self, path: str, http_method: str, func: Callable):
        po = PathOperation(path, http_method)
        self.path_operations[po] = func

    def _create_register_decorator(self, path: str, http_method: str):
        def decorator(func: Callable):
            self._register_path_operations(path, http_method, func)
            return func

        return decorator

    def get(self, path: str):
        return self._create_register_decorator(path, "GET")

    def post(self, path: str):
        return self._create_register_decorator(path, "POST")

    def __call__(self, environ, start_response):
        po = PathOperation(environ["PATH_INFO"], environ["REQUEST_METHOD"])
        func = self.path_operations.get(po)
        if func is None:
            status = "404 NOT FOUND"
            headers = [("Content-Type", "text/plain")]
            body = b""
        else:
            status = "200 OK"
            headers = [("Content-Type", "text/plain")]
            body = func().encode("utf-8")
        start_response(status, headers)
        return [body]


@dataclass(frozen=True, eq=True)
class PathOperation:
    path: str
    http_method: str
