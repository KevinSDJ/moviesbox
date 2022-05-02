import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchtrendingweek = createAsyncThunk('apidata/fetchtrendingweek', async () => {
  const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=1b8860ae930c966f835fc2abaafdade9')
  return response.data
})
