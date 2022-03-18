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

    clip_list = []
    for index, clip_slot in enumerate(track.clip_slots):
        if clip_slot.clip:
            clip_list.append(
                {"clipIndex": index, "clipName": track.clip_slots[index].clip.name}
            )
        else:
            clip_list.append(None)

    track_dict = {
        "trackIndex": track_index,
        "trackName": track.name,
        "clipList": clip_list,
        "muteStatus": track.mute,
    }
    return json.dumps(track_dict)


@app.patch("/api/track")
def update_track(request: Request):
    update_body = request.body.decode("utf-8")
    update_object = json.loads(update_body)

    track_index = request.path_params["track_index"]
    track = request.ableton_song.tracks[track_index]
    track.mute = update_object["muteStatus"]
    return f"Updated track {track_index} with mute status {update_object['muteStatus']}"


@app.get("/api/track/launch")
def launch_clip(request: Request):
    return f"Called launch clip with index {request.path_params['clip_index']} on track {request.path_params['track_index']}"
