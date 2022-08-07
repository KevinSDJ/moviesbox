import { createContext, useEffect, useState } from 'react';
import { useGetDetailsMovieQuery, useGetVideoTrailerQuery } from '../services/api';

export const ContextMovieDataSelect= createContext()


const ContextMovPlay= ({children})=>{
    const [mvId,setMovId]= useState(false)
    const [src,setSrc]= useState(false)
    const [moviedata,setMovieData]= useState(null)
    const [skiptrailer,setSkip]= useState(true)
    const [skipMovDetail,setSkipMovDetail]= useState(true)
    
    const {currentData:trailerData,error:errorTrailer,isFetching:trailerFetching}=  useGetVideoTrailerQuery(mvId,{skip:skiptrailer})
    const {currentData:movieData,error:movDerror,isFetching:moviDetFetching}= useGetDetailsMovieQuery(mvId,{skip:skipMovDetail})
    const fetchmovietrailer=(id)=>{
        setMovId(id)
        setSkip(!skiptrailer)
    }
    const fetchMovieDetail=(id)=>{
        setMovId(id)
        setSkipMovDetail(!skipMovDetail)
    }
    
    useEffect(()=>{
        if(trailerData?.length){
            let id= trailerData.length>1 && trailerData[2].key || trailerData[0].key
            setSrc(`https://www.youtube.com/watch?v=${id}`)
            setMovId(false)
            setSkip(!skiptrailer)
        }
        if(movieData){
            setMovieData(movieData)
            setMovId(false)
            setSkipMovDetail(!skipMovDetail)
        }
        console.log(moviedata,src,mvId)
    },[trailerData,movieData])


    

    return (<ContextMovieDataSelect.Provider 
    value={{mvId,src,moviedata,fetchmovietrailer,fetchMovieDetail,toggleDrawer:setSrc,toggleDrawerMovD:setMovieData}}>
        {children}
    </ContextMovieDataSelect.Provider>)
}

export default ContextMovPlay