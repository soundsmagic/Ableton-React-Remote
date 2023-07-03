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
  tagTypes: ['Track'],
  endpoints: (builder) => ({
    getTracks: builder.query<Track[] | null, void>({
      query: () => ({ url: '/tracks' }),
    }),
    changeTrackSendValue: builder.mutation<Track, TrackUpdateMutation>({
      query: trackUpdateQuery,
    }),
    toggleMute: builder.mutation<Track, TrackUpdateMutation>({
      query: trackUpdateQuery,
    }),
    toggleSolo: builder.mutation<Track, TrackUpdateMutation>({
      query: trackUpdateQuery,
    }),
  }),
});

function trackUpdateQuery(options: TrackUpdateMutation) {
  return {
    url: `/track/${options.trackIndex}`,
    method: 'PATCH',
    body: options.update,
  };
}

export const { useGetTracksQuery, useChangeTrackSendValueMutation, useToggleMuteMutation, useToggleSoloMutation } = remoteScriptsApi;
