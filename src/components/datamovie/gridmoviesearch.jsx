import { SimpleGrid } from '@chakra-ui/react'
import MovieCard from '../moviecard'
import { formatnumber } from './../../utilities/formatnumberating'
export default function GridDisplay ({ data }) {
  return (<>
  <SimpleGrid minChildWidth={'calc(15rem)'} maxBlockSize={'2xl'} gridGap={' 20px'} gridTemplateRows={'max-content'} marginTop={'14'} height={'80vh'} overflow={'auto'}>
    {data.map(e => <MovieCard key={e.id} id={e.id} date={e.release_date} image={e.poster_path} title={e.original_title} voteaverage={formatnumber(e.vote_average)}/>)}
  </SimpleGrid>
  </>)
}
