const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
  status: false
}

const headerReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_STATUS:
      return {
       ...state, 
       status: true
      }
    default:
      return state;
  }
}

export const statusActive = () => {
  return {type: UPDATE_STATUS}
}

export default headerReducer;