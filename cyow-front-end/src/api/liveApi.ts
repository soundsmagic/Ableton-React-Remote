import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const liveApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getScenes: builder.query({
            query: () => ({ url: '/scene' })
        }),
        launchScene: builder.query({
            query: (sceneIndex) => ({ url: `/scene/${sceneIndex}/launch` })
        }),

    })
})