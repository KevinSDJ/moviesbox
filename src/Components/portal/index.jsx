import ReactDOM from 'react-dom'
import { useEffect } from "react"

const portalroot =document.getElementById('portal')
export const Portal =({children})=>{
    const container = document.createElement('div')
    useEffect(()=>{
        portalroot.appendChild(container)
        return ()=>{portalroot.removeChild(container)}
    },[portalroot])

    return ReactDOM.createPortal(children,container)
}