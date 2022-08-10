import { useGetSearchQuery } from "../../services/api"
import {FixedSizeList as List} from 'react-window'
import { LitlePreview } from "../litlepreviewmov"

export const SearchsDisplay =({query})=>{
    const {currentData,error,isFetching} = useGetSearchQuery(query)


    return (<div className='display-searchs' >
    {isFetching && <span>Loading ...</span>}
    {error && <span>Not found</span>}
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
        {console.log(data[index].poster_path)}
        <LitlePreview id={data[index].id} poster={data[index].poster_path} title={data[index].title}/>
        </li>)
    }}
    </List>}
    </div>)
}