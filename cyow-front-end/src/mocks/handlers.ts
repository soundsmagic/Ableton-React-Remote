import { rest } from 'msw';
import { mockTrackList } from './mockData';
// import { Scene, Track } from '../types/types';

export const handlers = [
  rest.get('api/tracks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTrackList.map((item) => item.trackIndex)));
  }),
  // rest.get<null, Record<string, string>, Track>('api/track/:trackIndex', (req, res, ctx) => {
  //     const { trackIndex } = req.params;
  //     let index: number;
  //     try {
  //         index = parseInt(trackIndex)
  //     } catch (error) {
  //         console.log('Wrong format of supplied track index.')
  //     }
  //     const requestedTrackObject = mockTrackList.find(item => item.trackIndex === index);
  //     if (requestedTrackObject) {
  //         return res(
  //             ctx.status(200),
  //             ctx.json(requestedTrackObject)
  //         )
  //     }
  //     return res(
  //         ctx.status(404),
  //     )
  // }),
];
