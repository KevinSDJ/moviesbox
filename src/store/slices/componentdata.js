import { componentstate } from './../states'
import { createSlice } from '@reduxjs/toolkit'
import { componentstatemanagement } from '../actions/stateofcomponents'

const componentsbehavior = createSlice({
  name: 'componentsbehavior',
  initialState: componentstate,
  reducers: {
    ...componentstatemanagement
  }
})

export const { getScreenSize } = componentsbehavior.actions
export { componentsbehavior }
