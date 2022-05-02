import { createSlice } from '@reduxjs/toolkit'
import { initstate } from './../states'
import { fetchtrendingweek } from './../actions/datamovieactions'

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
  }
})

export { apidata }
