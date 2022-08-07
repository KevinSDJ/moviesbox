import { useContext } from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import './../../styles/info_btn.scss'

export const InfMovBtn=({id})=>{
    const {fetchMovieDetail}= useContext(ContextMovieDataSelect)
    return (
    <button className="info-btn" onClick={()=>fetchMovieDetail(id)}>
        <BsFillInfoCircleFill/> 
        </button>)
}