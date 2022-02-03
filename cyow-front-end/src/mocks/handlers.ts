import { rest } from 'msw';
import { mockSceneList, mockTrackList } from './mockData';

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
    rest.get('api/track/:trackIndex', (req, res, ctx) => {
        const { trackIndex } = req.params;
        try {
            const index = parseInt(trackIndex)
        } catch (error) {

        }
        const requestedTrackObject = mockTrackList.find(item => item.trackIndex === parseInt(trackIndex))
        return res(
            ctx.status(200),
            ctx.json()
        )
    })
]