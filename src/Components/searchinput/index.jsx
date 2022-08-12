import { useContext,useRef } from "react";
import {SearchContext} from './../../context/search.jsx'
import {HiSearchCircle} from 'react-icons/hi'




export const SearchInput = ({closeSearch=null,icon=null}) => {
    const {changeContSearchSt} = useContext(SearchContext)
    let inputref= useRef()
    let timeout
    const handleChange=()=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (inputref.current.value !== '') {
                changeContSearchSt(inputref.current.value)
            }else{
                changeContSearchSt(null)
            }
            clearTimeout(timeout)
        }, 1000)
    }
    return (
        <div className="search-input-section">
        <input
            type={'search'}
            name="search"
            onBlur={(e) => {
                if (e.target.value === '' && closeSearch) {
                    closeSearch(false)
                }
            }}
            ref={inputref}
            maxLength={20}
            onChange={handleChange}
            placeholder='search by title'
            autoComplete='off'
            required />
            {icon && <HiSearchCircle className="icon-search-input"/>}
        </div>
        
    )
}