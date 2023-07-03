import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Track, TrackUpdateMutation } from '../types/types';

export const remoteScriptsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'plain/text, application/json');
      return headers;
    },
  }),
  tagTypes: ['Scene', 'Track'],
  endpoints: (builder) => ({
    getTracks: builder.query<Track[] | null, void>({
      query: () => ({ url: '/tracks' }),
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
    }),
  }),
});

export const { useGetTracksQuery, useToggleMuteMutation, useToggleSoloMutation } = remoteScriptsApi;
