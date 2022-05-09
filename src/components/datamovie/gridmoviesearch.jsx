import { SimpleGrid } from '@chakra-ui/react'
import MovieCard from '../moviecard'

export default function GridDisplay ({ data }) {
  return (<>
  <SimpleGrid minChildWidth={'250px'} gridRow={{ repeat: 'auto,300px' }} spacingY='30px' spacingX={'30px'} marginTop={'14'} height={'70vh'} overflow={'auto'}>
    {data.map(e => <MovieCard key={e.id} id={e.id} date={e.release_date} image={e.poster_path} title={e.original_title} voteaverage={e.vote_average}/>)}
  </SimpleGrid>
  </>)
}
