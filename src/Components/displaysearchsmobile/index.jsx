import { useContext } from 'react'
import {FixedSizeList as List} from 'react-window'
import { SearchContext } from '../../context/search'
import { useGetSearchQuery } from '../../services/api'
import { LitlePreview } from '../litlepreviewmov'



const ViewsSearchs=({query})=>{
    const {currentData,error,isFetching} = useGetSearchQuery(query)

    return (<>
    {isFetching && <span>Loading ...</span>}
    {error && <span>Not found</span>}
    {currentData && <List
    innerElementType={'ul'}
    itemData={currentData}
    itemCount={currentData.length}
    height={200}
    width={200}
    style={{maxWidth:'400px',overflowX:'hidden'}}
    itemSize={130}
    className="display-searchs-mobile-inner"
    >
    {({data,index,style})=>{
        return (<li style={style}>
        <LitlePreview id={data[index].id} poster={data[index].poster_path} title={data[index].title}/>
        </li>)
    }}
    </List>}
    </>)
}


export const DisplaySearchsMobile=()=>{
    const {search} = useContext(SearchContext)

    if(!search)return (<></>)
    return(<ViewsSearchs query={search}/>)
}