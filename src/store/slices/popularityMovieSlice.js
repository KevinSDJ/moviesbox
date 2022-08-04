import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_KEY } from '../../credentials/enviroment'
import { baseQuery } from '../../services/apiwithaxios'


export const fetchAllPopMov = createAsyncThunk(
    'popularities/fetchAllPopMov',
    async () => {
        let response = await baseQuery.get(`/movie/popular?language=en-US&${API_KEY}`)
        return response.data
    }
)
const PopularityMovieSlice = createSlice({
    name: 'popularity',
    initialState: {
        movies: [],
        status: 'idle', // idle - loading - success -failed
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPopMov.pending, (state, action) => {
            state.status = 'loading'
        }),
            builder.addCase(fetchAllPopMov.fulfilled, (state, action) => {
                state.status = 'success'
                state.movies = action.payload
            }),
            builder.addCase(fetchAllPopMov.rejected, (state, action) => {
                state.status = "failed",
                    state.error = action.payload
            })
    }
})

export const selectAllPopMovies = (state) => state.persReducer.popularity
export default PopularityMovieSlice.reducer