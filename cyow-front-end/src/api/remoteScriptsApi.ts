import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ClipParams, Scene, Track, TrackUpdate } from '../types/types';

export const remoteScriptsApi = createApi({
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
        launchClip: builder.query<void, ClipParams>({
            query: (options) => ({ url: `/track/${options.trackIndex}/${options.clipIndex}/launch` })
        }),
        toggleMute: builder.mutation<void, TrackUpdate>({
            query: (options) => ({
                url: `/track/${options.trackIndex}`,
                method: 'PATCH',
                body: options.update
            })
        })
    })
})

export const {
    useGetScenesQuery,
    useLaunchSceneQuery,
    useGetTracksQuery,
    useGetSingleTrackQuery,
    useLaunchClipQuery,
    useToggleMuteMutation
} = remoteScriptsApi;