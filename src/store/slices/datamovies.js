import { createSlice } from '@reduxjs/toolkit'
import { initstate } from './../states'
import { fetchtrendingweek, fetchpopularity, fetchupcomming, searchmovie } from './../actions/datamovieactions'

const apidata = createSlice({
  name: 'apidata',
  initialState: initstate,
  reducers: {
    clearsearch: (state, action) => {
      return { ...state, searchs: { data: [], status: '' } }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchtrendingweek.pending, (state, action) => {
        state.topTranding.status = 'loading'
      })
      .addCase(fetchtrendingweek.fulfilled, (state, action) => {
        state.topTranding.data = action.payload.results
        state.topTranding.status = 'idle'
      })
      .addCase(fetchtrendingweek.rejected, (state, action) => {
        state.topTranding.status = 'error'
      })
      .addCase(fetchpopularity.pending, (state, action) => {
        state.popularity.status = 'loading'
      })
      .addCase(fetchpopularity.fulfilled, (state, action) => {
        state.popularity.data = action.payload.results
        state.popularity.status = 'idle'
      })
      .addCase(fetchpopularity.rejected, (state, action) => {
        state.popularity.status = 'error'
      })
      .addCase(fetchupcomming.pending, (state, action) => {
        state.upcomming.status = 'loading'
      })
      .addCase(fetchupcomming.fulfilled, (state, action) => {
        state.upcomming.data = action.payload.results
        state.upcomming.status = 'idle'
      })
      .addCase(fetchupcomming.rejected, (state) => {
        state.upcomming.status = 'error'
      })
      .addCase(searchmovie.pending, (state) => {
        state.searchs.status = 'loading'
      })
      .addCase(searchmovie.fulfilled, (state, action) => {
        state.searchs.status = 'idle'
        state.searchs.data = action.payload.results
      })
      .addCase(searchmovie.rejected, (state, action) => {
        state.searchs.status = 'error'
      })
  }
})

export { apidata }
export const { clearsearch } = apidata.actions
