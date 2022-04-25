from ast import Call
import os
from typing import Callable
from dataclasses import dataclass
from .request import Request


class WSGIApplication:
    def __init__(self):
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

    def patch(self, path: str):
        return self._create_register_decorator(path, "PATCH")

    def __call__(self, environ, start_response, song):
        request = Request.from_environ(environ, song)
        po = PathOperation(request.path, environ["REQUEST_METHOD"])
        func = self.path_operations.get(po)
        if func is None:
            try:
                build_dir = r"C:\ProgramData\Ableton\Live 11 Suite\Resources\MIDI Remote Scripts\CYOW_Remote_App\build"
                file_path = (
                    build_dir + "/index.html"
                    if request.path == "/"
                    else build_dir + request.path
                )
                file_to_serve = open(file_path)
                file_content = file_to_serve.read()
                file_to_serve.close()
                status = "200 OK"
                headers = []
                body = file_content.encode("utf-8")
            except:
                status = "404 NOT FOUND"
                headers = [("Content-type", "text/plain")]
                body = b"Resource not found."
        else:
            status = "200 OK"
            headers = (
                [
                    ("Content-type", "text/plain"),
                    ("x-request-id", request.headers["x-request-id"]),
                ]
                if "x-request-id" in request.headers
                else [("Content-Type", "text/plain")]
            )
            body = func(request=request).encode("utf-8")
        start_response(status, headers)
        return [body]


@dataclass(frozen=True, eq=True)
class PathOperation:
    path: str
    http_method: str
