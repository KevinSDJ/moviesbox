import { Menu, MenuButton, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import { VscChromeClose } from 'react-icons/vsc'

export default function MobileMenu () {
  const [isOpen, setIOpen] = useState(false)
  const onClose = () => {
    setIOpen(!isOpen)
  }
  return (<Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<CgMenu color='gray' />}
            variant={'solid'}
            onClick={onClose}
        />
        <Drawer placement={'right'} size='sm' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
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
