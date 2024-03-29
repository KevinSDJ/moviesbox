import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import Drawer from 'react-modern-drawer'
import {MdOutlineClose} from 'react-icons/md'
import './../../styles/mobilemenu.scss'
import { Link } from 'react-router-dom'



export const MobileMenu =()=>{
    const [isOpen,setOpen]= useState(false)
    return (<>
        <button className='mobile-button' onClick={()=>setOpen(!isOpen)}>
            <HiMenuAlt3/>
        </button>
        <Drawer
        direction='bottom'
        open={isOpen}
        size={'fit-content'}
        onClose={()=>setOpen(!isOpen)}
        className='mobile-menu-drawer'
        >
        <div className='mobile-menu-header'>
        <button className='mobile-menu-close' onClick={()=>setOpen(!isOpen)}>
            <MdOutlineClose/>
        </button>
        </div>
        <ul onClick={()=>setOpen(!isOpen)}>
            <li>
                <Link to='/' >
                    Home
                </Link>
            </li>
            <hr/>
            <li>
                <Link to='Mylist' >
                    Mylist
                </Link>
            </li>
            <hr/>
            <li>
                <Link to='About' >
                    About
                </Link>
            </li>
        </ul>
        </Drawer>
    </>)
}