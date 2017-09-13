import { ADD_TODO } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      state.push(action.payload)
      return state
    default:
      return state
  }
}

export default reducer
