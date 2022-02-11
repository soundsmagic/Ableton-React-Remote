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
    muteStatus: boolean
}

export interface ClipParams {
    trackIndex: number,
    clipIndex: number
}

export interface TrackUpdate {
    trackIndex: number,
    update: {
        trackName?: string,
        muteStatus?: boolean
    }
}