import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { remoteScriptsApi } from '../api/remoteScriptsApi';

export const store = configureStore({
  reducer: {
    [remoteScriptsApi.reducerPath]: remoteScriptsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(remoteScriptsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

