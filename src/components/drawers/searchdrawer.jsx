import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import Searchbutton from '../buttons/searchbutton'
import Searchbar from '../searchbar'

const SearchDraw = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (<>
  <Searchbutton cb={onOpen}/>
  <Drawer
        isOpen={isOpen}
        placement='left'
        size={'full'}
        onClose={onClose}
        finalFocusRef={btnRef}
    >
        <DrawerOverlay />
        <DrawerContent bgColor={'rgba(194, 207, 229,0.7) '}>
            <DrawerCloseButton />
            <DrawerHeader fontSize={'3xl'} color={'gray.700'}>Search your movie or serie</DrawerHeader>

            <DrawerBody>
                <Searchbar />
            </DrawerBody>

            <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
    </>)
}

export default SearchDraw
