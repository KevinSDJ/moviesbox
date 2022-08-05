import {MdOutlinePlaylistAdd} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setFavsMovie } from '../../store/slices/favlist.slice'


export const AdToFavsBTN=({data,disabled})=>{
    let dispatch= useDispatch()
    const handleClick=()=>{
        dispatch(setFavsMovie(data))
    }
    return (<button disabled onClick={handleClick}>
        <MdOutlinePlaylistAdd/>
    </button>)
}