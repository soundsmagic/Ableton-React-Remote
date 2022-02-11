import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Scene, Track } from '../types/types';

export const liveApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api', prepareHeaders: (headers) => {
            headers.set('Accept', 'plain/text, application/json');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getScenes: builder.query<Scene[], void>({
            query: () => ({ url: '/scenes' })
        }),
        launchScene: builder.query<void, number>({
            query: (sceneIndex) => ({ url: `/scene/${sceneIndex}/launch` })
        }),
        getTracks: builder.query<Track[], void>({
            query: () => ({ url: '/tracks' })
        }),
        getSingleTrack: builder.query<Track, number>({
            query: (trackIndex) => ({ url: `/track/${trackIndex}` })
        }),
        launchClip: builder.query<void, { trackIndex: number, clipIndex: number }>({
            query: (options) => ({ url: `/track/${options.trackIndex}/${options.clipIndex}/launch` })
        }),
    })
})

export const {
    useGetScenesQuery,
    useLaunchSceneQuery,
    useGetTracksQuery,
    useGetSingleTrackQuery,
    useLaunchClipQuery
} = liveApi;