import { useState } from 'react'
import PlayerMedia from '../videoplr'
import './../../styles/overlayposter.scss'

const OvPosterCard = ({id, title, poster }) => {
    const [openMedia,setOpenMedia] = useState(false)
    return (
        <>
            <div className="overlay-poster">
                <img className="overlay-poster-image" src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
                <div className="overlay-circle">
                    <p>{title}</p>
                    <button onClick={()=>setOpenMedia(!openMedia)}>play</button>
                </div>
                {openMedia && <PlayerMedia idmovie={id} closeMedia={setOpenMedia} />}
            </div >
            <div className='overlay-poster-mobile'>
                <h4>{title}</h4>
                <button>dsdasd</button>
            </div>
        </>
    )
}

export default OvPosterCard