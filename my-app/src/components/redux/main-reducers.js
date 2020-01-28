import { InteractionWithLocalStorage } from "../common/handlers";

const ADD_WORD = 'ADD-WORD'; 

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
    case ADD_WORD:
      return{
        ...state,
        listWords: [...state.listWords, action.word ]
      }
 
    default:
      return state;
  }
}

export const addWord = (word) => {
  return {type: ADD_WORD, word}
}

export const addWordsThunk = (word) => {
  return (dispatch) => {
   let addLocale =  new InteractionWithLocalStorage('word');
   addLocale.addLocalStorage(word);
   let a = addLocale.createList();
   dispatch(addWord(a));
  }
}

export default mainReducer;