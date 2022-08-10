import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import Drawer from 'react-modern-drawer'



export const MobileMenu =()=>{
    const [isOpen,setOpen]= useState(false)
    return (<>
        <button className='mobile-button' onClick={()=>setOpen(!isOpen)}>
            <HiMenuAlt3/>
        </button>
        <Drawer
        direction='right'
        open={isOpen}
        size={'80vw'}
        onClose={setOpen}
        className='mobile-menu-drawer'
        >
        <button onClick={()=>setOpen(!isOpen)}>
            close
        </button>
        </Drawer>
    </>)
}