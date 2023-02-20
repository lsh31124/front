import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage'
import loginSlice from './loginSlice'

const logger = createLogger()

const rootReducer = combineReducers({
  login: loginSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whiteList: ['login'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
