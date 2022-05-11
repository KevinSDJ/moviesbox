
import { Container } from '@chakra-ui/react'

import Form from '../components/form'

export default function AuthPage () {
  return (<Container maxWidth={'full'} display='flex' height='100vh' alignItems={'center'} justifyContent={'center'} bg='blue.700' >
        <Form/>
    </Container>)
}
