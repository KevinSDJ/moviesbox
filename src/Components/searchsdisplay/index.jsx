import { useEffect ,useState } from "react"
import { useGetSearchQuery } from "../../services/api"
import {FixedSizeList as List} from 'react-window'
import { LitlePreview } from "../litlepreviewmov"
import { sharingMovieSearch } from "../../services/sharingmoviesearch"




const ViewDataList=({query})=>{

    const {currentData,error,isFetching} = useGetSearchQuery(query)

    return (<div className='display-searchs' >
    {isFetching && <span>Loading ...</span>}
    {error || !currentData?.length && <span>Not found</span>}
    {currentData && <List
    innerElementType={'ul'}
    itemData={currentData}
    itemCount={currentData.length}
    height={400}
    width={400}
    style={{maxWidth:'400px',overflowX:'hidden'}}
    itemSize={130}
    className="display-searchs-inner"
    >
    {({data,index,style})=>{
        return (<li style={style}>
        <LitlePreview data={data[index]} id={data[index].id} poster={data[index].poster_path} title={data[index].title}/>
        </li>)
    }}
    </List>}
    </div>)
}




export const SearchsDisplay =()=>{
    const [open,setOpen] =useState('')
    let subscription$= sharingMovieSearch.getSubject()

    useEffect(()=>{
        subscription$.subscribe((data) =>{     
            if(data){
                setOpen(data)
            }else{
                setOpen('')
            }
        })
    },[])
    if(!open)return (<></>)
    if(open){
        return (<ViewDataList query={open}/>)
    }
}