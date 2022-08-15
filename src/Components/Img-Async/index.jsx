
import Img from 'react-cool-img'
import loadingimage from './../../assets/Spinner-0.7s-200px.svg'




const ImageAsync = ({ url, title, classname=null,placeholder=null }) => {
  return (
    <Img
      className={classname || '.'}
      placeholder={placeholder || loadingimage}
      src={url}
      cache
      alt={title + '-image'}
    />
  )
}
export default ImageAsync