import {motion} from 'framer-motion'

const SearchComponent=()=>{

    return(<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 ,transition:{duration:1}}}
    exit={{ opacity: 0 }}
    className='search-component'
    >
    <input type={'search'} name="search" width='100' placeholder='title' required/>
    </motion.div>)
}

export default SearchComponent