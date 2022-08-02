import {createSlice} from '@reduxjs/toolkit'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../../services/firebase/firebaseconfig'


const AuthSlice= createSlice({
    name:'auth',
    initialState:{user:null,isLogin:false,token:null},
    reducers:{
        setCredentials:(state,action)=>{
            console.log(action)
        },
        logout:(state,action)=>{

        }
    }
})


export default AuthSlice.reducer