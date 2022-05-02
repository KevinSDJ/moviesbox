import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import store from './store/store'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
         <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>, document.getElementById('root'))
