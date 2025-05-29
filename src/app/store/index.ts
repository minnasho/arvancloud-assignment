import { configureStore } from '@reduxjs/toolkit'
import { authDataReducer } from '../../redux/authDataSlice'

export const store = configureStore({
  reducer: {
    authData: authDataReducer,
  },
})

//using TS inference to figureout as much as possible
export type TAppDispatch = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>
