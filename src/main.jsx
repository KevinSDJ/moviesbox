import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import App from './App'
import store from './store/store'
import 'normalize.css'
import './styles/index.scss'

let storepersist= persistStore(store)


const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode >
        <Provider store={store}>
            <PersistGate persistor={storepersist}>
               <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>)
