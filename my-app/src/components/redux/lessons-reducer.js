const SET_STATUS_CONTENT = 'UPDATE-STATUS-CONTENT'; 
const SET_VALUE = 'SET-VALUE'; 

let initialState = {
  statusContent: 0,
  valueLevel: 0
}

const lessonsReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_STATUS_CONTENT: 
    return {
      ...state, statusContent: action.value 
    }
    case SET_VALUE:
    return {
      ...state, valueLevel: action.level
    }
    default:
      return state 
  }
}

export const setStatusContent = value => ({type: SET_STATUS_CONTENT, value})
export const setValue = level => ({type: SET_VALUE, level})

export default lessonsReducer