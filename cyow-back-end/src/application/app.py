from .wsgi_framework import WSGIApplication, Request

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes(request: Request):
    print("Called get scenes")
    return ", ".join(map(str, [1, 2, 3, 5]))


@app.get("/api/track/launch")
def launch_clip(request: Request):
    print("Called launch clip")
    return f"Called launch clip with index {request.path_params['clip_index']} on track {request.path_params['track_index']}"
