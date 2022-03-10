from .wsgi_framework import WSGIApplication, Request
import json

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes(request: Request):
    return str(request.ableton_song.scenes.__len__())


@app.get("/api/tracks")
def get_tracks(request: Request):
    return str(request.ableton_song.tracks.__len__())


@app.get("/api/track/launch")
def launch_clip(request: Request):
    return f"Called launch clip with index {request.path_params['clip_index']} on track {request.path_params['track_index']}"
