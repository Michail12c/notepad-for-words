
const SET_STATUS_CONTENT = 'UPDATE-STATUS-CONTENT'; 

let initialState = {
  statusContent: 0
}

const lessonsReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_STATUS_CONTENT: 
    return {
      ...state, statusContent: action.value 
    }
    default:
      return state 
  }
}

export const setStatusContent = value => ({type: SET_STATUS_CONTENT, value})

export default lessonsReducer