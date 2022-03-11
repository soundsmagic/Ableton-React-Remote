from .wsgi_framework import WSGIApplication, Request
import json

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes(request: Request) -> str:
    return str(request.ableton_song.scenes.__len__())


@app.get("/api/tracks")
def get_tracks(request: Request) -> str:
    return str(request.ableton_song.tracks.__len__())


# In reality the following routes contain path parameters, which get filtered and added to the request dictionary in the WSGI server.
@app.get("/api/scene")
def get_single_scene(request: Request):
    scene_index = request.path_params["scene_index"]
    scene_name = request.ableton_song.scenes[scene_index].name
    scene_dict = {"sceneIndex": scene_index, "sceneName": scene_name}
    return json.dumps(scene_dict)


@app.get("/api/track")
def get_single_track(request: Request):
    track_index = request.path_params["track_index"]
    track = request.ableton_song.tracks[track_index]

    track_name = track.name

    clip_list = []
    for index, clip in enumerate(track.clip_slots):
        if clip:
            clip_list.append(
                {"clipIndex": index, "clipName": track.clip_slots[index].clip.name}
            )
        else:
            clip_list.append(None)

    track_dict = {
        "trackIndex": track_index,
        "trackName": track_name,
        "clipList": clip_list,
    }
    return json.dumps(track_dict)


@app.get("/api/track/clip")
def get_clip_slots(request: Request):
    track_index = request.path_params["track_index"]
    clip_index = request.path_params["clip_index"]
    clip_name = request.ableton_song.track[track_index].clip_slots[clip_index].name
    clip_dict = {"clipIndex": clip_index, "clipName": clip_name}
    return json.dumps(clip_dict)


@app.get("/api/track/launch")
def launch_clip(request: Request):
    return f"Called launch clip with index {request.path_params['clip_index']} on track {request.path_params['track_index']}"
