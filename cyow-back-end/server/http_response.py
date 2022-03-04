from typing import List, Tuple


def create_status_line(status: str = "200 OK") -> str:
    return f"HTTP/1.1 {status}\r\n"


def format_headers(headers: List[Tuple[bytes, bytes]]):
    return "".join([f"{key}: {value}\r\n" for key, value in headers])


def make_response(
    status_code: int = 200,
    headers: List[Tuple[str, str]] = None,
    body: bytes = b"",
):
    if headers is None:
        headers = []
    content = [
        create_status_line(status_code).encode("utf-8"),
        format_headers(headers).encode("utf-8"),
        b"\r\n" if body else b"",
        body,
    ]
    return b"".join(content)
