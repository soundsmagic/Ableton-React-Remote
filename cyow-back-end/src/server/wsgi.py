from dataclasses import dataclass, field
from typing import List, Tuple
from io import BytesIO
from .http_response import make_response


@dataclass
class WSGIRequest:
    http_method: str = ""
    path: str = ""
    headers: List[Tuple[str, str]] = field(default_factory=lambda: [])
    body: BytesIO = field(default_factory=lambda: BytesIO())

    def to_environ(self):
        path_parts = self.path.split("?")
        headers_dict = {key: value for key, value in self.headers}
        environ = {
            "REQUEST_METHOD": self.http_method,
            "PATH_INFO": path_parts[0],
            "QUERY_STRING": path_parts[1] if len(path_parts) > 1 else "",
            "SERVER_NAME": "127.0.0.1",
            "SERVER_PORT": "5000",
            "SERVER_PROTOCOL": "HTTP/1.1",
            "CONTENT_TYPE": headers_dict.get("Content-Type", ""),
            "CONTENT_LENGTH": headers_dict.get("Content-Length", ""),
            "wsgi.version": (1, 0),
            "wsgi.url_scheme": "http",
            "wsgi.input": self.body,
            "wsgi.errors": BytesIO(),
            "wsgi.multithread": True,
            "wsgi.multiprocess": False,
            "wsgi.run_once": False,
            **{f"HTTP_{name}": value for name, value in self.headers},
        }
        return environ


@dataclass
class WSGIResponse:
    status: str = ""
    headers: List[Tuple[str, str]] = field(default_factory=lambda: [])
    body: BytesIO = field(default_factory=lambda: BytesIO())
    is_sent: bool = False

    def start_response(self, status: str, headers: List[Tuple[str, str]]):
        self.status = status
        self.headers = headers

    def to_http(self):
        self.is_sent = True
        return make_response(self.status, self.headers, self.body)
