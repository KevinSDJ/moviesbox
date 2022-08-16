import {MdOutlinePlaylistAdd} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setFavsMovie } from '../../store/slices/favlist.slice'
import './../../styles/addTofavBtn.scss'

export const AddToFavsBTN=({data,disabled})=>{
    let dispatch= useDispatch()
    const handleClick=()=>{
        dispatch(setFavsMovie(data))
    }
    return (<button className='add-fav-btn'  disabled={disabled} onClick={handleClick}>
        <MdOutlinePlaylistAdd/>
    </button>)
}