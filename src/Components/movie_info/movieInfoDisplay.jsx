import { memo } from "react"
import { useGetDetailsMovieQuery } from "../../services/api"

const MovieInfoDisplay=({idMovie})=>{
    const { currentData,error,isFetching } =  useGetDetailsMovieQuery(idMovie,{skip:!Boolean(idMovie)}) 



    console.log("display info movie render")
    if(isFetching) return (<div style={{height:'70vh',backgroundColor:"white"}}>
    <h1>Loading ...</h1>
</div>)

    return (<div style={{height:'70vh',backgroundColor:"white"}}>
        <h1>Movie Data</h1>
    </div>)
}

export default memo(MovieInfoDisplay)