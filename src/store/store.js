import { configureStore } from '@reduxjs/toolkit'
import root from './reducer'

const store = configureStore({ reducer: root })
export default store
