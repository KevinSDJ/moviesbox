


const OvPosterCard=({title,poster})=>{
    return (<div className="overlay-poster">
        <img className="overlay-poster-image" width={60} src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title}/>
        <div className="overlay-circle">
            <p>{title}</p>
        </div>
    </div>)
}