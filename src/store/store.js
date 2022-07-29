import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import upcommingMovieSlice from './slices/upcommingMovieSlice'
import { MoviesApi } from './../services/api'


const store = configureStore({
  reducer: {
    [MoviesApi.reducerPath]: MoviesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MoviesApi.middleware),
  devTools: import.meta.env.NODE_ENV !== 'production'
})

export default store
