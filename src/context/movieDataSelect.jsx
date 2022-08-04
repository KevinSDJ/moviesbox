import { createContext, useEffect, useState } from 'react';
import { useGetVideoTrailerQuery } from '../services/api';

export const ContextMovieDataSelect= createContext()

let def ={currentData:null,error:null,isFetching:null}
const ContextMovPlay= ({children})=>{
    const [mvId,setMovId]= useState(false)
    const [src,setSrc]= useState(false)
    const [skip,setSkip]= useState(true)

    const {currentData,error,isFetching}=  useGetVideoTrailerQuery(mvId,{skip})
    const fetchmovietrailer=(id)=>{
        setMovId(id)
        setSkip(!skip)
    }
    useEffect(()=>{
        if(currentData?.length){
            let source={
                type:'video',
                sources:[
                    {
                        src:currentData[0].key,
                        provider:'youtube'
                    }
                ]
            }
            setSrc(source)
            setMovId(false)
            setSkip(!skip)
        }
    },[currentData])


    

    return (<ContextMovieDataSelect.Provider value={{mvId,src,fetchmovietrailer}}>
        {children}
    </ContextMovieDataSelect.Provider>)
}

export default ContextMovPlay