from .wsgi_framework import WSGIApplication, Request
import json

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes(request: Request) -> str:
    return str(request.ableton_song.scenes.__len__())


@app.get("/api/tracks")
def get_tracks(request: Request) -> str:
    return str(request.ableton_song.tracks.__len__())


@app.get("/api/scene")
def get_single_scene(request: Request):
    scene_index = request.path_params["scene_index"]
    scene_name = request.ableton_song.scenes[scene_index].name
    scene_dict = {"sceneIndex": scene_index, "sceneName": scene_name}
    return json.dumps(scene_dict)


@app.get("/api/track")
def get_single_track(request: Request):
    track_index = request.path_params["track_index"]
    track_name = request.ableton_song.tracks[track_index].name
    track_dict = {"trackIndex": track_index, "trackName": track_name}
    return json.dumps(track_dict)


@app.get("/api/track/launch")
def launch_clip(request: Request):
    return f"Called launch clip with index {request.path_params['clip_index']} on track {request.path_params['track_index']}"
