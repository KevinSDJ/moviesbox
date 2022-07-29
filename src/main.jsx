import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { store, storePersist } from './store/store'
import 'normalize.css'
import './styles/index.scss'
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode >
        <Provider store={store}>
            
                  <App/>
            
        </Provider>
    </React.StrictMode>)
