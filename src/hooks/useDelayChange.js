import { useEffect, useState } from "react"



export const useLazyChange=(input)=>{
    const [value,setValue] = useState(!input)
    useEffect(()=>{
        let lazy =setTimeout(()=>setValue(input))
        return ()=>{clearTimeout(lazy)}
    },[input])
    return {value}
}