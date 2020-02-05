import { InteractionWithLocalStorage } from "../common/handlers";

const ADD_WORD = 'ADD-WORD'; 
const ADD_WORD_TWO = 'ADD-WORD-TWO';

let initialState = {
  listWords: [],
  listWordsTwo: ''
}

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_WORD:
      return{
        ...state,
        listWords: [...state.listWords, action.word ]
      }
      case ADD_WORD_TWO:
        return{
          ...state,
          listWordsTwo: [...state.listWordsTwo, action.wordTwo]
        }
    default:
      return state;
  }
}

export const addWord = (word) => {
  return {type: ADD_WORD, word}
}
export const addWordTwoList = (wordTwo) => {
  return {type: ADD_WORD_TWO, wordTwo}
}
export const initializeMain = (elem) => {
  return (dispatch) =>{
    let addLocale = new InteractionWithLocalStorage(elem);
    let content = addLocale.createList();
    if(elem === 'word'){
     return dispatch(addWord(content)); 
    }
   if(elem === 'word2'){
     return dispatch (addWordTwoList(content))
   }
  }
}
export const addWordsThunk = (word) => {
  return (dispatch) => {
   let addLocale =  new InteractionWithLocalStorage('word');
   addLocale.addLocalStorage(word);
   let a = addLocale.createList();
   dispatch(addWord(a));
  }
}

export const addWordsThunkTwoList = (wordTwo) => {
  return (dispatch) => {
   let addLocale =  new InteractionWithLocalStorage('word2');
   addLocale.addLocalStorage(wordTwo);
   let a = addLocale.createList();
   dispatch(addWordTwoList(a));
  }
}

export default mainReducer;