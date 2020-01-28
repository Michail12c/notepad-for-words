const UPDATE_STATUS_APP = 'UPDATE-STATUS-APP';

let initialState = {
  listWords: [
    {word: 'Hello', transfer: 'Привіт'},
    {word: 'girl', transfer: 'Дівчина'},
    {word: 'boy', transfer: 'Хлопець'},
    {word: 'peoples', transfer: 'Люди'}
  ]
}

const mainReducer = (state = initialState, action) => {
  switch(action.type){
 
    default:
      return state;
  }
}


export default mainReducer;