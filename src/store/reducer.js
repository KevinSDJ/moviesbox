import { combineReducers } from '@reduxjs/toolkit'
import { apidata } from './slices/datamovies'
import { componentsbehavior } from './slices/componentdata'

const root = combineReducers({ apidata: apidata.reducer, behaviorcomponent: componentsbehavior.reducer })
export default root
