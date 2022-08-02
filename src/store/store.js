import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import authSlice from './slices/authSlice.js'
import favMovSlice from './slices/favlist.slice'
import { MoviesApi } from './../services/api'



const persistConfigure={
  key:'root',
  version:1.0,
  storage
}
const reducers= combineReducers({
  Favs:favMovSlice,
  Auth:authSlice
})

const persReducer= persistReducer(persistConfigure,reducers)

const store = configureStore({
  reducer:{persReducer,[MoviesApi.reducerPath]: MoviesApi.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MoviesApi.middleware),
  devTools: import.meta.env.NODE_ENV !== 'production'
})

export default store
