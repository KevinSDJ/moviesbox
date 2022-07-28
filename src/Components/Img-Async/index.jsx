import Img from 'react-cool-img'
import BigSkeleton from '../Skeletons/BigSkeleton'
import loadingimage from './../../assets/Spinner-0.7s-200px.svg'




const ImageAsync=({url,title,classname})=>{
    return (
             <Img
               className={classname||'.'}
               placeholder={loadingimage}
               src={url}
               cache
               alt={title+'-image'}
              />
         )
}
export default ImageAsync