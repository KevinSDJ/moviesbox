import { configureStore, combineReducers } from '@reduxjs/toolkit'
import Thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import favMovSlice from './slices/favlist.slice'
import trendingMovieSlice from './slices/trendWeekMovieSlice'
import popularityMovieSlice from './slices/popularityMovieSlice'
import upcommingMovieSlice from './slices/upcommingMovieSlice'
import { MoviesApi } from './../services/api'


const persistConfigure={
  key:'root',
  version:1.0,
  storage
}
const reducers= combineReducers({
  upcommingmovies:upcommingMovieSlice,
  popularity:popularityMovieSlice,
  trendingweek:trendingMovieSlice,
  Favs:favMovSlice
})

const persReducer= persistReducer(persistConfigure,reducers)

const store = configureStore({
  reducer:{persReducer,[MoviesApi.reducerPath]: MoviesApi.reducer},
  middleware: [Thunk].concat(MoviesApi.middleware),
  devTools: import.meta.env.NODE_ENV !== 'production'
})

export default store
