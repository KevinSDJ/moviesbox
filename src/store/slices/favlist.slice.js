import {createSlice} from '@reduxjs/toolkit'


const MovFavs= createSlice({
    name:"Favourites",
    initialState:{
        movies:[]
    },
    reducers:{
        setFavsMovie:(state,action)=>{
            state.movies.push(action.payload)
        }
    }
})

export const { setFavsMovie } = MovFavs.actions
export default MovFavs.reducer