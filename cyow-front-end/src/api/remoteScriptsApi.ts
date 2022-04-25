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
            query: (sceneIndex) => ({
                url: `/scene/${sceneIndex}/launch`,
                responseHandler: (response) => response.status === 200 ? response.text() : response.json()
            })
        }),
        getTracks: builder.query<number[] | null, void>({
            query: () => ({ url: '/tracks', responseHandler: (response) => response.status === 200 ? response.text() : response.json() }),
            // Same as for getScenes above.
            transformResponse: response => {
                if (typeof (response) === 'string') {
                    const numberOfTracks = parseInt(response);
                    return [...Array(numberOfTracks).keys()]
                }
                return null
            }
        }),
        getSingleTrack: builder.query<Track, number>({
            query: (trackIndex) => ({ url: `/track/${trackIndex}` }),
            providesTags: (result, error, arg) => {
                // No idea why track index 0 won't work when all other tracks are updating correctly, but incrementing all indexes solved this for now
                return [{ type: 'Track' as const, id: arg + 1 }]
            }
        }),
        launchClip: builder.query<void, ClipParams>({
            query: (options) => ({
                url: `/track/${options.trackIndex}/${options.clipIndex}/launch`,
                responseHandler: (response) => response.status === 200 ? response.text() : response.json(),
            })
        }),
        toggleMute: builder.mutation<void, TrackUpdateMutation>({
            query: (options) => ({
                url: `/track/${options.trackIndex}`,
                method: 'PATCH',
                headers: { 'x-request-id': `Toggle Mute: ${options.id}`, 'x-timestamp-sent': `${Date.now()}` },
                body: options.update,
                responseHandler: (response) => response.status === 200 ? response.text() : response.json(),
            }),
            invalidatesTags: (result, error, arg) => {
                return [{ type: 'Track' as const, id: arg.trackIndex + 1 }]
            }
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
    useToggleMuteMutation,
    useLazyLaunchSceneQuery
} = remoteScriptsApi;