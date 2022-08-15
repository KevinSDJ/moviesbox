import { useState,useEffect,useRef } from "react";
import {HiSearchCircle} from 'react-icons/hi'
import { sharingMovieSearch } from "../../services/sharingmoviesearch.js";




export const SearchInput = ({closeSearch=null,icon=null}) => {
    const [inputvalue,setInputValue]= useState('')
    let inputref= useRef()
    let timeout
    const handleChange=()=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (inputref.current.value === '') {
                setInputValue('')
                sharingMovieSearch.setSubject('')
            }else{
                setInputValue(inputref.current.value)
            }
        }, 1000)
    }
    useEffect(()=>{
        inputvalue && sharingMovieSearch.setSubject(inputvalue)
    },[inputvalue])
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
            placeholder='search'
            autoComplete='off'
            required />
            {icon && <HiSearchCircle className="icon-search-input"/>}
        </div>
        
    )
}