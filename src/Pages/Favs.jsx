import { motion } from 'framer-motion'
import { useSelector } from "react-redux"
import { BackBtn } from "../Components/buttons"
import MovieCard from "../Components/MovieCard"
import { isFavourite } from "../util"
import ImageMeme from './../assets/pngegg.png'
import './../styles/favs_page.scss'

const Favs = () => {
   const data = useSelector(state => state.persReducer.Favs.movies)
   
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { duration: 0.2 } }}
         exit={{ opacity: 0 }}
         className="favs-page">
         <div className="favs-top-bloq"></div>
         <div className="favs-page-main">
            <BackBtn />
            <h1>Your selection</h1>
            {!data?.length && <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}> <p style={{textAlign:'center',color:'white'}}>¿?</p><img  width={300} src={ImageMeme}/></div> ||<div className="favs-page-content">
               {data.map(e => <MovieCard key={e.title + ' fav'} id={e.id} data={e} poster={e.poster_path} title={e.title} isFav={Boolean(isFavourite(data,e.title))} />)}
            </div>}
         </div>
      </motion.div>)
}

export default Favs