import { Scene, Track } from '../types/types'

export const mockSceneList: Scene[] = [
    {
        sceneIndex: 1,
        sceneName: 'Intro'
    },
    {
        sceneIndex: 2,
        sceneName: 'FirstSong'
    },
    {
        sceneIndex: 3,
        sceneName: 'Interlude'
    },
    {
        sceneIndex: 4,
        sceneName: 'Second song'
    }
]

export const mockTrackList: Track[] = [
    {
        trackIndex: 1,
        trackName: 'Rhodes',
        clipList: [
            {
                clipIndex: 1,
                clipName: 'Cool loop'
            }
        ],
        muted: false
    },
    {
        trackIndex: 2,
        trackName: 'Hammond',
        clipList: [],
        muted: true
    },
    {
        trackIndex: 3,
        trackName: 'Juno-60 arp',
        clipList: [
            {
                clipIndex: 1,
                clipName: 'Verse arp'
            },
            {
                clipIndex: 2,
                clipName: 'Chorus arp'
            },
            {
                clipIndex: 3,
                clipName: 'Outro arp'
            }
        ],
        muted: false
    }
]