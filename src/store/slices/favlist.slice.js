import {createSlice} from '@reduxjs/toolkit'


const MovFavs= createSlice({
    name:"Favourites",
    initialState:{
        movies:[]
    },
    reducers:{
        setFavsMovie:(state,action)=>{
            state.movies.push(action.payload)
        },
        removeFav:(state,action)=>{
            state.movies= state.movies.filter(e=> e.id!== action.payload)
        }
    }
})

export const { setFavsMovie,removeFav } = MovFavs.actions
export default MovFavs.reducer