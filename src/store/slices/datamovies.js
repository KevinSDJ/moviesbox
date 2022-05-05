import { createSlice } from '@reduxjs/toolkit'
import { initstate } from './../states'
import { fetchtrendingweek, fetchpopularity, fetchupcomming } from './../actions/datamovieactions'

const apidata = createSlice({
  name: 'apidata',
  initialState: initstate,
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
      .addCase(fetchupcomming.rejected, (state, action) => {
        state.upcomming.status = 'error'
      })
  }
})

export { apidata }
