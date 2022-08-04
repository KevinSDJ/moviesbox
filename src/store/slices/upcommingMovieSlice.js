import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY } from '../../credentials/enviroment'
import { baseQuery } from '../../services/apiwithaxios'


export const fetchAllUpcMovies= createAsyncThunk('upcommingMovies/fetchAllUpMovies',async ()=>{
  let response = await baseQuery.get(`/movie/upcoming?language=en-US&page=1&${API_KEY}`)
  return response.data
})


const UpcomMovSlice = createSlice({
  name: 'upcommingMovies',
  initialState: { 
    movies: [],
    status:'idle',
    error:null
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchAllUpcMovies.pending,(state,action)=>{
      state.status='loading'
    }),
    builder.addCase(fetchAllUpcMovies.fulfilled,(state,action)=>{
      state.status='success'
      state.movies= action.payload
    }),
    builder.addCase(fetchAllUpcMovies.rejected,(state,action)=>{
      state.status='failed'
      state.error= action.payload
    })
  }
})


export const selectAllUpMovies= (state)=>state.persReducer.upcommingmovies
export default UpcomMovSlice.reducer
