import {motion} from 'framer-motion'
import {SearchInput} from './../searchinput'
import './../../styles/search_component.scss'

const SearchComponent=({children,closeSearch=null,icon=null})=>{
    return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 ,transition:{duration:0.5}}}
    exit={{ opacity: 0 }}
    className='search-component'
    >
    <SearchInput closeSearch={closeSearch} icon={icon}/>
    {children}
    </motion.div>)
}

export default SearchComponent