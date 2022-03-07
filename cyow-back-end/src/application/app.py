from .wsgi_framework import WSGIApplication, Request
import json

app = WSGIApplication()

mock_scene_list = [
    {"scene_index": 1, "scene_name": "Intro"},
    {"scene_index": 2, "scene_name": "First song"},
    {"scene_index": 3, "scene_name": "Interlude"},
    {"scene_index": 4, "scene_name": "Second song"},
]

mock_track_list = [
    {
        "track_index": 1,
        "track_name": "Rhodes",
        "clip_list": [{"clip_index": 1, "clip_name": "Cool loop"}],
        "mute_status": False,
    },
    {"track_index": 2, "track_name": "Hammond", "clip_list": {}, "mute_status": True},
    {
        "track_index": 3,
        "track_name": "Juno-60 arp",
        "clip_list": [
            {"clip_index": 1, "clip_name": "Verse arp"},
            {"clip_index": 2, "clip_name": "Chorus arp"},
            {"clip_index": 3, "clip_name": "Outro arp"},
        ],
        "mute_status": False,
    },
]


@app.get("/api/scenes")
def get_scenes(request: Request):
    scene_list = [scene["scene_index"] for scene in mock_scene_list]
    return json.dumps(scene_list)


@app.get("/api/tracks")
def get_tracks(request: Request):
    track_list = [track["track_index"] for track in mock_track_list]
    return json.dumps(track_list)


@app.get("/api/track/launch")
def launch_clip(request: Request):
    return f"Called launch clip with index {request.path_params['clip_index']} on track {request.path_params['track_index']}"
