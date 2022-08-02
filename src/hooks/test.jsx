import { useGetVideoTrailerQuery } from "../services/api"





const TestSync= async (idmovie)=>{
    const {currentData,error,isFetching} = useGetVideoTrailerQuery(idmovie)
    try{
        let awaitdata= new Promise((resolve,reject)=>{
            if(currentData){
                resolve(currentData)
            }
            if(error){
                reject(error)
            }
        }) 
        let data= await awaitdata
        return data
    }catch(error){
        return error
    }
}

export default TestSync