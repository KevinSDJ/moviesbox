import { useEffect ,useState} from "react"
import { sharingIDmovieToTrailer } from "../services/sharingIDmovieTotrailer.service"


export const useIdTrailer =()=>{
    let subscribeToidTrailer= sharingIDmovieToTrailer.getSubject()
    const [id,setId] = useState('')
    let debounce
    useEffect(()=>{
        clearTimeout(debounce)
        subscribeToidTrailer.subscribe(data=>{
            if(data){
               debounce= setTimeout(()=>{setId(data)},300)
            }
            if(!data){
                debounce= setTimeout(()=>{setId('')},300)
            }
        })
        return ()=>{clearTimeout(debounce)}
    },[])

    return {id}
}