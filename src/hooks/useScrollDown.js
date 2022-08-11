import { useEffect, useState } from "react"



export const useScrollDown= ()=>{
    const [steps,setSteps]= useState(0)

    useEffect(()=>{
        let scrolldown= ()=>{
            setSteps(document.body.getBoundingClientRect().top)
        }
        window.addEventListener('scroll',scrolldown)
        return ()=>window.removeEventListener('scroll',scrolldown)
    },[])
    return {steps}
}