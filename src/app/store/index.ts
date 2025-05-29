import { configureStore } from '@reduxjs/toolkit'
import persistedReducer from './rootReducer'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist actions are non-serializable
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PURGE',
        ],
      },
    }),
})

//using TS inference to figureout as much as possible
export type TAppDispatch = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>
