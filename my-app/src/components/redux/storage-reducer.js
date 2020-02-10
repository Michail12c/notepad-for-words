const SET_FLAG = 'SET-FLAG';

let initialState = {
  flag: 0 
}

let storageReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_FLAG:
      return{
        ...state,
        flag: action.value
      }
   default: 
   return state;
  }
}

export const setFlagAC = value => ({type: SET_FLAG, value});
export default storageReducer;