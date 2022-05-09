import { useEffect, useState } from 'react'
import { validator } from '../utilities/validateform'
import swal from 'sweetalert'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
  Box
} from '@chakra-ui/react'
import axios from 'axios'
import useAuth from '../context/hooks/useAuth'
import { useNavigate, Navigate } from 'react-router-dom'

export default function Form () {
  const [state, setState] = useState({ email: '', password: '' })
  const [errors, setError] = useState({ email: '', password: '' })
  const { user, setSession } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    setError(validator(state))
  }, [state])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://challenge-react.alkemy.org', state, { withCredentials: true })
      .then(res => {
        localStorage.setItem('alkemy', res.data.token)
        swal({ title: 'success', text: 'welcome', icon: 'success' })
          .then(() => {
            setSession(true)
            navigate('/')
          })
      }, error => {
        swal('Oh!', `${error.response.data.error}`, 'error')
      })
    setState({ email: '', password: '' })
  }

  return <>
           {(user.session && <Navigate to={'/'} replace/>) || <Box as='form' autoComplete="off" width={'500px'} bg='white' padding={'10'} borderRadius='base' onSubmit={handleSubmit}>
        <Stack spacing={4}>
            <FormControl isInvalid={Boolean(errors.email)} isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel >
                <Input size='md' id='email' type='email' name="email" onChange={handleChange } autoComplete={'off'} value={state.email} />
                {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={Boolean(errors.password)} isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel >
                <Input size='md' id='password' type='password' name="password" autoComplete={'off'} onChange={handleChange} value={state.password} />
                {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
            </FormControl>
            <Button size='md' type="submit" variant='solid' colorScheme={'blue'} isDisabled={Boolean(errors.email || errors.password)}>
                sign in
            </Button>
        </Stack>

        </Box>}

    </>
}
