import './../../styles/moviecard.scss'



const MovieCard =({title,poster})=>{
    return (<div className='movie-card'>
        <img src={`https://image.tmdb.org/t/p/original/${poster}`}/>
        <div className='movie-card-overlay'>
            <p>{title}</p>
            <div className='overlay-options-card'>
                <button>play</button>
                <button>add</button>
            </div>
        </div>
    </div>)
}

export default MovieCard