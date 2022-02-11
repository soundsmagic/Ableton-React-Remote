import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { liveApi } from '../api/liveApi';

export const store = configureStore({
  reducer: {
    [liveApi.reducerPath]: liveApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(liveApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

