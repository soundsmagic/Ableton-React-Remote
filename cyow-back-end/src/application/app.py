from .wsgi_framework import WSGIApplication

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes():
    print("Called get scenes")
    return [1, 2, 3, 5]
