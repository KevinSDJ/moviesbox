import {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import './../../styles/search_component.scss'
import { SearchsDisplay } from '../searchsdiplay'




const SearchComponent=({closeSearch})=>{
    const [search,setSearch] = useState('')
    let inputref= useRef()
    let timeout
    const handleChange=()=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (inputref.current.value !== '') {
                setSearch(inputref.current.value)
            }else{
                setSearch(null)
            }
            clearTimeout(timeout)
        }, 1000)
    }
    
    return(<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 ,transition:{duration:1}}}
    exit={{ opacity: 0 }}
    className='search-component'
    >
    <input 
    type={'search'} 
    name="search" 
    onBlur={(e)=>{
        if(e.target.value ===''){
            closeSearch(false)
        }
    }}
    ref={inputref}
    maxLength={20}  
    onChange={handleChange} 
    placeholder='search by title' 
    autoComplete='off'
    required/>
    {search&& <SearchsDisplay query={search}/>}
    </motion.div>)
}

export default SearchComponent