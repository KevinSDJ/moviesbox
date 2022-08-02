import { useState } from 'react'
import PlayerMedia from "../Components/videoplr"



const useModal=()=>{
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return {PlayerModal:PlayerMedia,isOpen,setIsOpen,toggleDrawer}
}

export default useModal