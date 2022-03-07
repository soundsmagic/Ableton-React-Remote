from typing import Dict
from dataclasses import dataclass


@dataclass
class Request:
    query: Dict[str, str]
    body: bytes
    headers: Dict[str, str]

    @classmethod
    def from_environ(cls, environ: Dict):
        query = {}
        if environ["QUERY_STRING"]:
            qs = environ["QUERY_STRING"]
            query = dict(entry.split("=") for entry in qs.split("&"))
        body = environ["wsgi.input"].read()
        headers = {
            key.replace("HTTP_", ""): value
            for key, value in environ.items()
            if key.startswith("HTTP_")
        }
        return cls(query, body, headers)
