import {BsFillInfoCircleFill} from 'react-icons/bs'
import { sharingIDmovieToInfo } from '../../services/sharingIDmovieToInfo.service'
import './../../styles/info_btn.scss'

export const InfMovBtn=({id})=>{
    
    return (
    <button className="info-btn" onClick={()=>sharingIDmovieToInfo.setSubject(id)}>
        <BsFillInfoCircleFill/> 
        </button>)
}