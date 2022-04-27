from .wsgi_framework import WSGIApplication, Request
import json

app = WSGIApplication()


@app.get("/api/scenes")
def get_scenes(request: Request):
    scene_list = []
    for index, scene in enumerate(request.ableton_song.scenes):
        scene_list.append(
            {"sceneIndex": index, "sceneName": request.ableton_song.scenes[index].name}
        )
    return json.dumps(scene_list)


@app.get("/api/tracks")
def get_tracks(request: Request):
    track_list = []
    for trackIndex, track in enumerate(request.ableton_song.tracks):
        clip_list = []
        for clipIndex, clip_slot in enumerate(track.clip_slots):
            if clip_slot.clip:
                clip_list.append(
                    {
                        "clipIndex": clipIndex,
                        "clipName": track.clip_slots[clipIndex].clip.name,
                    }
                )
            else:
                clip_list.append(None)

        track_list.append(
            {
                "trackIndex": trackIndex,
                "trackName": track.name,
                "clipList": clip_list,
                "muteStatus": track.mute,
            }
        )
    return json.dumps(track_list)


# In reality the following routes contain path parameters, which get filtered and added to the request dictionary in the WSGI server.
@app.patch("/api/track")
def update_track(request: Request):
    update_body = request.body.decode("utf-8")
    update_object = json.loads(update_body)

    requested_track_index = request.path_params["track_index"]
    track = request.ableton_song.tracks[requested_track_index]
    track.mute = update_object["muteStatus"]

    clip_list = []
    for clipIndex, clip_slot in enumerate(track.clip_slots):
        if clip_slot.clip:
            clip_list.append(
                {
                    "clipIndex": clipIndex,
                    "clipName": track.clip_slots[clipIndex].clip.name,
                }
            )
        else:
            clip_list.append(None)

    track_dict = {
        "trackIndex": requested_track_index,
        "trackName": track.name,
        "clipList": clip_list,
        "muteStatus": track.mute,
    }
    return json.dumps(track_dict)


@app.get("/api/scene/launch")
def launch_scene(request: Request):
    scene_index = request.path_params["scene_index"]
    scene = request.ableton_song.scenes[scene_index]
    scene.fire()
    return f"Fired scene {scene.name}"


@app.get("/api/track/launch")
def launch_clip(request: Request):
    track_index = request.path_params["track_index"]
    clip_index = request.path_params["clip_index"]
    track = request.ableton_song.tracks[track_index]
    clip_slot = track.clip_slots[clip_index]
    if clip_slot.has_clip:
        clip_slot.clip.fire()
        return f"Fire clip {clip_slot.clip.name} on track {track.name}"
    else:
        return "No clip fired."
