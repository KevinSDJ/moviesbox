import { Menu, MenuButton, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
export default function MobileMenu () {
  const [isOpen, setIOpen] = useState(false)
  const { screensize } = useSelector(state => state.behaviorcomponent)
  const onClose = () => {
    setIOpen(!isOpen)
  }
  return (<Menu>
        <MenuButton
            as={IconButton}
            bgColor={'transparent'}
            aria-label='Options'
            icon={<HiMenuAlt3 color={(screensize < 900 && 'white') || 'black'} fontSize={'2em'} />}
            onClick={onClose}
        />
        <Drawer
        placement={'right'}
        size='md'
        onClose={onClose}
        isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bgColor={'rgba(194, 207, 229,0.7) '}>
                <DrawerHeader borderBottomWidth='1px'><IconButton onClick={onClose} icon={<VscChromeClose/>} /></DrawerHeader>
                <DrawerBody>
                    <p>mesdsa</p>
                    <p>dsadas</p>
                    <p>sadsad</p>
                    <p>sadsad</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Menu>)
}
