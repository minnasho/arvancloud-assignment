import { combineReducers } from '@reduxjs/toolkit'
import { authDataReducer } from '../../redux/authDataSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // uses localStorage by default

const rootReducer = combineReducers({
  authData: authDataReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authData'], // persist only this slice
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
