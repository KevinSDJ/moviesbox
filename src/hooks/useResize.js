import { useEffect, useState } from "react";


export const useResize=()=>{
    const [size,setSize]= useState(window.innerWidth)
    useEffect(()=>{
        let resize=(e)=>{
            setSize(window.innerWidth)
        }
        window.addEventListener('resize',resize)
        resize()
        return ()=>{window.removeEventListener('resize',resize)}
    },[])
    return {screen:size}
}