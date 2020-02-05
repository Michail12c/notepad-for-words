const UPDATE_STATUS = 'UPDATE-STATUS';
const NOW_STATUS = 'NOW-STATUS'; 

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
    case NOW_STATUS:
      return {
        ...state,
        status: false
      }  
    default:
      return state;
  }
}

export const statusActive = () => {
  return {type: UPDATE_STATUS}
}
export const statusDeactivate = () => {
  return {type: NOW_STATUS}
} 

export default headerReducer;