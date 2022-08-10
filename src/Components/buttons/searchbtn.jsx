import { AnimatePresence } from 'framer-motion'
import {useState } from 'react'
import {HiSearchCircle} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import SearchComponent from '../SearchComponent'
import './../../styles/search.scss'
import { useResize } from '../../hooks/useResize'


export const SearchButton=()=>{
    const [open,setOpen]= useState(false)
    const {screen}= useResize()
    return(
        <>
        <AnimatePresence>
            {open && screen>700 && <SearchComponent closeSearch={setOpen}/>}
            {open && screen<=700 && <div>Nop no hay componente aun</div>}
        </AnimatePresence>
        <button className='search-button' onClick={()=>setOpen(!open)}  >
            {open && <AiFillCloseCircle/> || <HiSearchCircle/>}
        </button>
        </>
    )
}


