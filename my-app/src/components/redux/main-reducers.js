import { InteractionWithLocalStorage } from "../common/handlers";
import firstList from '../common/data.json';

const ADD_WORD = 'ADD-WORD'; 
const ADD_WORD_TWO = 'ADD-WORD-TWO';
const CREATE_LIST = 'CREATE-LIST';
const ADD_WORD_LIST_USER = 'ADD-WORD-LIST-USER';
const UPDATE_OUTPUT_ORDER = 'UPDATE-OUTPUT-ORDER'; 

let initialState = {
  listWords: [],
  listWordsTwo: [],
  newList: Boolean (localStorage.getItem('list')),
  listUser: '',
  outputOrder: false
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
          listWordsTwo: action.wordTwo
        }
    case CREATE_LIST:
          return{
            ...state,
            newList: action.data
          }
   case ADD_WORD_LIST_USER: 
         return{
          ...state,
          listUser: action.word
    }
    case UPDATE_OUTPUT_ORDER: 
        return{
          ...state,
          outputOrder: action.status
        }
    default:
      return state;
  }
}

export const addWord = (word) => ({type: ADD_WORD, word});
export const addWordTwoList = (wordTwo) => ({type: ADD_WORD_TWO, wordTwo});
export const createList = (data) => ({type: CREATE_LIST, data });
export const addWordListUser = (word) => ({type: ADD_WORD_LIST_USER, word});
export const updateOutputOrder = (status) => ({type: UPDATE_OUTPUT_ORDER, status}); 


export const initializeMain = (elem) => {
  return (dispatch) =>{
    let addLocale = new InteractionWithLocalStorage(elem);

     !addLocale.keySearch('list') ? localStorage.setItem('list', '') // ініціалізаці списку 
     : dispatch(createList(localStorage.getItem('list')));           // користувача 
  
    let content = addLocale.createList();
  
    if(elem === 'word') return dispatch(addWord(firstList)); 
    if(elem === 'word2') return dispatch (addWordTwoList(content));
    if(elem == 'listUser') return dispatch(addWordListUser(content));
  }
}


export const createListThunk = (data) => {
  return (dispatch) => {
    localStorage.setItem('list', data);
    let nameList = localStorage.getItem('list');
    dispatch(createList(nameList));
  }
}

const setThunkList  = (value, name, nameDispatch) => {
  return (dispatch) => {
    let addLocale = new InteractionWithLocalStorage(name); 
    addLocale.addLocalStorage(value);
    let newValue = addLocale.createList();
    dispatch(nameDispatch(newValue));
  }
}
export const removeWordsFromListThunk = (wordsArray, name) => {
  return (dispatch) => {
    let removeWord = new InteractionWithLocalStorage(name);
    removeWord.updateLocalStorage(wordsArray);
    let newList = removeWord.createList();
    dispatch(addWordTwoList(newList));  
  }
}

export const addWordsThunk = (words) => setThunkList (words, 'word', addWord); 
export const addWordsThunkTwoList = (wordTwo) => setThunkList(wordTwo ,'word2', addWordTwoList); 
export const addWordThunkListUser = (word) => setThunkList(word, 'listUser', addWordListUser);




export default mainReducer;