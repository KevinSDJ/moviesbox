import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spinner
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

export default function MediaPlayer ({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [trailer, setTrailer] = useState('')

  useEffect(() => {
    if (id) {
      onOpen()
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=1b8860ae930c966f835fc2abaafdade9`)
        .then(res => {
          const trailers = res.data.results.filter(e => e.type === 'Trailer')
          console.log('llego la data')
          setTrailer(`https://www.youtube.com/embed/${trailers[trailers.length - 1].key}`)
        }, error => console.log(error))
    }
  }, [id])
  return (
        <>
        <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
                <ModalOverlay />
                <ModalContent bgColor={'black'}>
                    <ModalHeader color={'black'}>Trailer</ModalHeader>
                    <ModalCloseButton color={'white'} />
                    <ModalBody>
                        {!trailer && <Spinner size={'lg'}/>}
                        {trailer && <Plyr source={{ type: 'video', sources: [{ provider: 'youtube', src: trailer, size: 1024 }] }} options={{ youtube: { origin: 'http://localhost:3000' } }} />}
                    </ModalBody>
                </ModalContent>
        </Modal>
        </>
  )
}
