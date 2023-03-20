import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import loginSlice from './loginSlice'

const rootReducer = combineReducers({
  login: loginSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whiteList: ['login'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
