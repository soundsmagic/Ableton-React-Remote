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
        getScenes: builder.query<number[] | null, void>({
            query: () => ({ url: '/scenes', responseHandler: (response) => response.status === 200 ? response.text() : response.json() }),
            // The API responds with the number of scenes, but we will eventually need a list of scene indexes to iterate over.
            transformResponse: response => {
                if (typeof (response) === 'string') {
                    const numberOfScenes = parseInt(response);
                    return [...Array(numberOfScenes).keys()]
                }
                return null
            }
        }),
        getSingleScene: builder.query<Scene, number>({
            query: (sceneIndex) => ({ url: `/scene/${sceneIndex}` }),
            providesTags: (result, error, arg) => [{ type: 'Scene' as const, id: arg }]
        }),
        launchScene: builder.query<void, number>({
            query: (sceneIndex) => ({ url: `/scene/${sceneIndex}/launch` })
        }),
        getTracks: builder.query<number[], void>({
            query: () => ({ url: '/tracks', responseHandler: (response) => response.status === 200 ? response.text() : response.json() }),
            transformResponse: response => Array.from(Array(response).keys())
        }),
        getSingleTrack: builder.query<Track, number>({
            query: (trackIndex) => ({ url: `/track/${trackIndex}` }),
            providesTags: (result, error, arg) => [{ type: 'Track' as const, id: arg }]
        }),
        launchClip: builder.query<void, ClipParams>({
            query: (options) => ({ url: `/track/${options.trackIndex}/${options.clipIndex}/launch` })
        }),
        toggleMute: builder.mutation<void, TrackUpdateMutation>({
            query: (options) => ({
                url: `/track/${options.trackIndex}`,
                method: 'PATCH',
                body: options.update
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Track' as const, id: arg.trackIndex }]
        })
    })
})

export const {
    useGetScenesQuery,
    useGetSingleSceneQuery,
    useLaunchSceneQuery,
    useGetTracksQuery,
    useGetSingleTrackQuery,
    useLazyLaunchClipQuery,
    useToggleMuteMutation
} = remoteScriptsApi;