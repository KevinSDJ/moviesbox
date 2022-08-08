import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {HiSearchCircle} from 'react-icons/hi'
import SearchComponent from '../SearchComponent'
import './../../styles/search.scss'

export const SearchButton=()=>{
    const [open,setOpen]= useState(false)
    return(
        <>
        <AnimatePresence>
            {open && <SearchComponent/>}
        </AnimatePresence>
        <button className='search-button' onClick={()=>setOpen(!open)} >
            <HiSearchCircle/>
        </button>
        </>
    )
}


