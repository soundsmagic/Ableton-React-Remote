import { rest } from 'msw';
import { mockSceneList, mockTrackList } from './mockData';
import { Track } from '../types/types';

export const handlers = [
    rest.get('api/scene', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockSceneList)
        );
    }),
    rest.get('api/scene/:sceneIndex/launch', (req, res, ctx) => {
        const { sceneIndex } = req.params;
        console.log(`Launched scene ${sceneIndex}`);
        return res(
            ctx.status(200),
        );
    }),
    rest.get('api/tracks', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockTrackList)
        );
    }),
    rest.get<null, Record<string, string>, Track>('api/track/:trackIndex', (req, res, ctx) => {
        const { trackIndex } = req.params;
        let index: number;
        try {
            index = parseInt(trackIndex)
        } catch (error) {
            console.log('Wrong format of supplied track index.')
        }
        const requestedTrackObject = mockTrackList.find(item => item.trackIndex === index);
        if (requestedTrackObject) {
            return res(
                ctx.status(200),
                ctx.json(requestedTrackObject)
            )
        }
        return res(
            ctx.status(404),
        )
    }),
    rest.get<null, Record<string, string>>('api/track/:trackIndex/:clipIndex/launch', (req, res, ctx) => {
        const { trackIndex, clipIndex } = req.params;
        let suppliedTrackIndex: number;
        try {
            suppliedTrackIndex = parseInt(trackIndex)
        } catch (error) {
            console.log('Wrong format of supplied track index.')
        }
        const requestedTrackObject = mockTrackList.find(item => item.trackIndex === suppliedTrackIndex);
        if (requestedTrackObject) {
            let suppliedClipIndex: number;
            try {
                suppliedClipIndex = parseInt(clipIndex)
            } catch (error) {
                console.log('Wrong format of supplied track index.')
            }
            if (requestedTrackObject.clipList) {
                const requestedClip = requestedTrackObject.clipList.find(item => item.clipIndex === suppliedClipIndex);
                if (requestedClip) {
                    return res(
                        ctx.status(200),
                    )
                } else {
                    console.log('No clip with that index.')
                }
            }
        } else {
            console.log('No track with that index.')
        }
    })
]