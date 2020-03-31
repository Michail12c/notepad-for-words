import { InteractionWithLocalStorage } from "../common/handlers";
import firstList from '../common/data.json';

const ADD_WORD = 'ADD-WORD'; 
const ADD_WORD_TWO = 'ADD-WORD-TWO';
const CREATE_LIST = 'CREATE-LIST';
const ADD_WORD_LIST_USER = 'ADD-WORD-LIST-USER';
const UPDATE_OUTPUT_ORDER = 'UPDATE-OUTPUT-ORDER'; 
const UPDATE_COUNT_WORD = 'UPDATE-COUNT-WORD'; 
const LEARNING_WORD = 'LEARNING-WORD'; 

let initialState = {
  listWords: [],
  listWordsTwo: [],
  newList: Boolean (localStorage.getItem('list')),
  listUser: '',
  outputOrder: false,
  countWords: [],
  countLearningWords: []
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
    case UPDATE_COUNT_WORD:
      return {
        ...state, countWords: action.count
      }
    case LEARNING_WORD: 
    return {
      ...state, countLearningWords: action.count
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
export const addWordCountWord = (count) => ({type: UPDATE_COUNT_WORD, count}); 
export const addWordCountLearningWord = count => ({type: LEARNING_WORD, count})

export const initializeMain = (elem) => {
  return (dispatch) =>{
    let addLocale = new InteractionWithLocalStorage(elem);

     !addLocale.keySearch('list') ? localStorage.setItem('list', '') // ініціалізаці списку 
     : dispatch(createList(localStorage.getItem('list')));           // користувача 
      
     if(elem === 'countWords'){
        !addLocale.keySearch('countWords') ? localStorage.setItem('countWords', '')
        : dispatch(addWordCountWord(addLocale.getCountWord())); 
      }
      if(elem === 'countLearningWords'){
        !addLocale.keySearch('countLearningWords') ? localStorage.setItem('countLearningWords', '')
        : dispatch(addWordCountLearningWord(addLocale.getCountWord())); 
      }


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
    if(name === "word2") dispatch(addWordTwoList(newList));
    if(name === "listUser") dispatch(addWordListUser(newList)); 
  }
}

export const editionListUserThunk = (newElement, id, name) => {
  return (dispatch) => {
    let changeList = new InteractionWithLocalStorage(name);
    changeList.editionList(newElement, id);
    let newList = changeList.createList();
    dispatch(addWordListUser(newList)); 
  }
}

export const countWordsThunk = (name) => {
  return (dispatch) => {
    let count = new InteractionWithLocalStorage(name); 
    count.setCountWord();
    if(name === 'countWords') dispatch(addWordCountWord(count.getCountWord())); 
    if(name === 'countLearningWords' ) dispatch(addWordCountLearningWord(count.getCountWord())); 
  }
}



export const addWordsThunk = (words) => setThunkList (words, 'word', addWord); 
export const addWordsThunkTwoList = (wordTwo) => setThunkList(wordTwo ,'word2', addWordTwoList); 
export const addWordThunkListUser = (word) => setThunkList(word, 'listUser', addWordListUser);




export default mainReducer;