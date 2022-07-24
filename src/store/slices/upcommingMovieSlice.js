import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const UpcomMovSlice= createSlice({
    name:'UpcommingMovies',
    initialState:{upcommingMovies:[]},
    extraReducers:{}
})



export default UpcomMovSlice.reducer