import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseQuery } from '../../services/apiwithaxios'
const key_api= import.meta.env.VITE_API_KEY

export const fetchAllPopMov= createAsyncThunk(
    'popularities/fetchAllPopMov',
    async ()=>{
        let response= await baseQuery.get(`/trending/movie/week?${key_api}`)
        return response.data
    }
)
const PopularityMovieSlice= createSlice({
    name:'popularity',
    initialState:{
        movies:[],
        status:'idle', // idle - loading - success -failed
        error:null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAllPopMov.pending,(state,action)=>{
            state.status='loading'
        }),
        builder.addCase(fetchAllPopMov.fulfilled,(state,action)=>{
            state.status='success'
            state.movies= action.payload
        }),
        builder.addCase(fetchAllPopMov.rejected,(state,action)=>{
            state.status="failed",
            state.error= action.payload
        })
    }
})

export const selectAllPopMovies=(state)=>state.popularity.popularity
export default PopularityMovieSlice.reducer