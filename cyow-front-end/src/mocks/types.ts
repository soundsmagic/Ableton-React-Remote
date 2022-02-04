export interface Scene {
    sceneIndex: number,
    sceneName: string
}

export interface Clip {
    clipIndex: number,
    clipName: string
}

export interface Track {
    trackIndex: number,
    trackName: string,
    clipList: Clip[],
    muted: boolean
}

export interface TrackIndexRequestParam {
    trackIndex: string
}