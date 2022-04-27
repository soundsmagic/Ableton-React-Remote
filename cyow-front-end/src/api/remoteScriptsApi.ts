import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ClipParams, Scene, Track, TrackUpdateMutation } from '../types/types';

export const remoteScriptsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api', prepareHeaders: (headers) => {
            headers.set('Accept', 'plain/text, application/json');
            return headers;
        }
    }),
    tagTypes: ['Scene', 'Track'],
    endpoints: (builder) => ({
        getScenes: builder.query<Scene[] | null, void>({
            query: () => ({ url: '/scenes' })
        }),
        launchScene: builder.query<void, number>({
            query: (sceneIndex) => ({
                url: `/scene/${sceneIndex}/launch`,
                responseHandler: (response) => response.status === 200 ? response.text() : response.json()
            })
        }),
        getTracks: builder.query<Track[] | null, void>({
            query: () => ({ url: '/tracks' })
        }),
        launchClip: builder.query<void, ClipParams>({
            query: (options) => ({
                url: `/track/${options.trackIndex}/${options.clipIndex}/launch`,
                responseHandler: (response) => response.status === 200 ? response.text() : response.json(),
            })
        }),
        toggleMute: builder.mutation<Track, TrackUpdateMutation>({
            query: (options) => ({
                url: `/track/${options.trackIndex}`,
                method: 'PATCH',
                body: options.update,
            }),
        }),
        toggleSolo: builder.mutation<Track, TrackUpdateMutation>({
            query: (options) => ({
                url: `/track/${options.trackIndex}`,
                method: 'PATCH',
                body: options.update,
            }),
        })
    })
})

export const {
    useGetScenesQuery,
    useLaunchSceneQuery,
    useGetTracksQuery,
    useLazyLaunchClipQuery,
    useToggleMuteMutation,
    useToggleSoloMutation,
    useLazyLaunchSceneQuery
} = remoteScriptsApi;