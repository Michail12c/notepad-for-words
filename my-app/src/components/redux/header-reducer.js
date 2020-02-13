const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
  status: false
}

const headerReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_STATUS:
      return {
       ...state, 
       status: action.value
      }
    default:
      return state;
  }
}

export const statusActive = (value) => {
  return {type: UPDATE_STATUS, value}
}

export default headerReducer;