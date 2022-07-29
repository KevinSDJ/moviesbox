import { createSlice } from '@reduxjs/toolkit'

const UpcomMovSlice = createSlice({
  name: 'UpcommingMovies',
  initialState: { upcommingMovies: [] },
  reducers: {
    setMovUpc: (data) => {
      state.upcommingMovies = data
    }
  }
})

export const { setMovUpc } = UpcomMovSlice.actions
export default UpcomMovSlice.reducer
