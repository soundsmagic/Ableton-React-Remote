class SplitBuffer:
    def __init__(self) -> None:
        self.data = b""

    def feed_data(self, data: bytes):
        self.data += data

    def pop(self, separator: bytes):
        first, *rest = self.data.split(separator, maxsplit=1)
        if not rest:
            return None
        else:
            self.data = separator.join(rest)
            return first

    def flush(self):
        temp = self.data
        self.data = b""
        return temp
