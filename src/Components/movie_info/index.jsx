import {useContext} from 'react'
import Drawer from 'react-modern-drawer'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import 'react-modern-drawer/dist/index.css'
import './../../styles/movie_info.scss'




const MovieInfo = () => {
    const {moviedata,toggleDrawerMovD} = useContext(ContextMovieDataSelect)
    return (<Drawer
                direction='bottom'
                open={Boolean(moviedata)}
                onClose={toggleDrawerMovD}
                size={'100vh'}
                className='movie-drawer-info'
            >
                <div className='movie-info-inner-draw' >
                <button onClick={()=>toggleDrawerMovD(!moviedata)}>close</button>
                    {moviedata?.title}
                </div>
            </Drawer>)
}

export default MovieInfo