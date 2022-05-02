import { configureStore } from '@reduxjs/toolkit'
import root from './reducer'

const store = configureStore({ reducer: root, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }) })
export default store
