from .wsgi_framework import WSGIApplication, Request

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes(request: Request):
    print("Called get scenes")
    return ", ".join(map(str, [1, 2, 3, 5]))
