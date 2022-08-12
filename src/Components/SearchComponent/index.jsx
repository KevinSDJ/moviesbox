import {useContext} from 'react'
import {motion} from 'framer-motion'
import {SearchContext} from './../../context/search.jsx'
import SearchContextProvider from './../../context/search.jsx'
import { SearchsDisplay } from '../searchsdiplay'
import {SearchInput} from './../searchinput'
import './../../styles/search_component.scss'






const SearchComponent=({children,closeSearch=null,icon=null})=>{
    return(
    <SearchContextProvider>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 ,transition:{duration:0.5}}}
    exit={{ opacity: 0 }}
    className='search-component'
    >
    <SearchInput closeSearch={closeSearch} icon={icon}/>
    {children}
    </motion.div>
    </SearchContextProvider>)
}

export default SearchComponent