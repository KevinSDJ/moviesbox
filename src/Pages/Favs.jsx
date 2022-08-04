import { useSelector } from "react-redux"
import MovieCard from "../Components/MovieCard"
import { isFavourite, sect } from "../Components/SlideSection"
import './../styles/favs_page.scss'
export const Favs=()=>{
    const data = useSelector(state=> state.persReducer.Favs.movies)
    if(!data?.length)return (<div>Mm? not Favourites added? </div>)
    return (
    <div className="favs-page">
       <div className="favs-page-main">
       <h1>You selection</h1>
       <div className="favs-page-content">
          {data.map(e=> <MovieCard key={e.title+' fav'} data={e} poster={e.poster_path} title={e.title} isFav={Boolean(isFavourite(e.title))}/>)}
       </div>
       </div>
    </div>)
}