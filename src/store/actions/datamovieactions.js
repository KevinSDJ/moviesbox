import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchtrendingweek = createAsyncThunk('apidata/fetchtrendingweek', async () => {
<<<<<<< HEAD
  const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=1b8860ae930c966f835fc2abaafdade9')
  return response.data
=======
  const prom = new Promise((resolve, reject) => {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=1b8860ae930c966f835fc2abaafdade9')
      .then(res => {
        setTimeout(() => resolve(res.data), 1000)
      }, error => reject(error.response))
  })
  await prom
  return prom
})
export const fetchpopularity = createAsyncThunk('apidata/fetchpopularity', async () => {
  const prom = new Promise((resolve, reject) => {
    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=1b8860ae930c966f835fc2abaafdade9')
      .then(res => {
        setTimeout(() => resolve(res.data), 2000)
      }, error => reject(error.response))
  })
  await prom
  return prom
})
export const fetchupcomming = createAsyncThunk('apidata/fetchupcomming', async () => {
  const prom = new Promise((resolve, reject) => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=1b8860ae930c966f835fc2abaafdade9')
      .then(res => {
        setTimeout(() => resolve(res.data), 3000)
      }, error => reject(error.response))
  })
  await prom
  return prom
>>>>>>> f56a35d (data)
})
