import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
  Spinner
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Searchbutton from '../buttons/searchbutton'
import GridDisplay from '../datamovie/gridmoviesearch'
import Searchbar from '../searchbar'

const SearchDraw = () => {
  const { data, status } = useSelector(state => state.apidata.searchs)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (<>
        <Searchbutton cb={onOpen} />
        <Drawer
            isOpen={isOpen}
            placement='left'
            size={'full'}
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent bgColor={'rgba(194, 207, 229,0.6) '}>
                <DrawerCloseButton />
                <DrawerHeader fontSize={'3xl'} color={'gray.700'}>Search your movie or serie</DrawerHeader>
                <DrawerBody>
                    <Searchbar />
                    {status === 'error' && <Text fontSize={'3xl'} color='gray.600'> There is no result for your search</Text>}
                    {status === 'loading' && <Text fontSize={'3xl'} color='gray.600'> Wait ....</Text>}
                    {status === 'loading' && <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl' />}
                    {(status === 'idle' && <GridDisplay data={data} />)}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>)
}

export default SearchDraw
