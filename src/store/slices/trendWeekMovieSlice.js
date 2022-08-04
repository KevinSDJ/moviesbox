import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_KEY } from '../../credentials/enviroment'
import { baseQuery } from '../../services/apiwithaxios'


export const fetchAllTrendMovies = createAsyncThunk(
    'trendingweek/fetchAllTrendMovies',
    async () => {
        let response = await baseQuery.get(`/trending/movie/week?${API_KEY}`)
        return response.data
    }
)
const TrendingWeekMovies = createSlice({
    name: 'trendingWeek',
    initialState: {
        movies: [],
        status: 'idle', // idle - loading - success -failed
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllTrendMovies.pending, (state, action) => {
            state.status = 'loading'
        }),
            builder.addCase(fetchAllTrendMovies.fulfilled, (state, action) => {
                state.status = 'success'
                state.movies = action.payload
            }),
            builder.addCase(fetchAllTrendMovies.rejected, (state, action) => {
                state.status = "failed",
                state.error = action.payload
            })
    }
})

export const selectAllTrendingWeek = (state) => state.trendingWeek.trendingweek
export default TrendingWeekMovies.reducer