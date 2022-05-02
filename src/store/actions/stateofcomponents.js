
const componentstatemanagement = {
  getScreenSize: (state, action) => { return { ...state, screensize: action.payload } }
}

export { componentstatemanagement }
