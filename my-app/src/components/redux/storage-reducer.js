const SET_FLAG = 'SET-FLAG';
const UPDATE_ITEM_LIST = 'UPDATE-ITEM-LIST';
const SET_INDEX_CARD = 'SET-INDEX-CARD';
const SET_STATUS_LESSON = 'SET-STATUS-LESSON';
const CHOICE_ELEMENT_CONTENT = 'CHOICE-ELEMENT-CONTENT';  
const UPDATE_STATUS_COLLECTOR = 'UPDATE-STATUS-COLLECTOR';
const SET_PUZZLE_WORDS = 'SET-PUZZLE-WORDS'; 
const SET_PREVIOUS_WORDS = 'SET-PREVIOUS-WORDS'; 
const DELETE_PREVIOUS_WORDS = 'DELETE-PREVIOUS-WORDS'; 
const UPDATE_STATUS_PUZZLE_PAGE = 'UPDATE-STATUS-PUZZLE-PAGE'; 
const ACTIVATE_COMPARING = 'ACTIVATE-COMPARING'; 
const SET_CONTENT_WITH_CARD = 'SET-CONTENT-WITH-CARD'; 


let initialState = {
  flag: 0,
  itemList: 0,
  statusCard: false, 
  indexCard: 0,
  statusLesson: 0,
  content: '',
  statusCollector: 0,
  previousWords: '',
  puzzleWords: '',
  statusPuzzlePage: '', 
  activateComparingValue: false,
  contentWithCard: ''
}

let storageReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_FLAG:
      return{
        ...state, flag: action.value
      }
    case UPDATE_ITEM_LIST:
      return{
        ...state, itemList: action.list
      }
    case SET_INDEX_CARD:
      return{
        ...state, indexCard: action.index
      }
    case SET_STATUS_LESSON:
      return {
        ...state, statusLesson: action.status
      }
    case CHOICE_ELEMENT_CONTENT:
      return{
        ...state, content: action.element
      } 
    case UPDATE_STATUS_COLLECTOR:
      return{
        ...state, statusCollector: action.status
      }
    case SET_PUZZLE_WORDS:
      return {
        ...state, puzzleWords: action.newArr
      }  
   case SET_PREVIOUS_WORDS:
     return {
       ...state, 
       previousWords: [...state.previousWords, action.words]
     }
  case DELETE_PREVIOUS_WORDS:
    return{
      ...state,
      previousWords: ''
    }
  case UPDATE_STATUS_PUZZLE_PAGE: 
  return {
    ...state, statusPuzzlePage: action.status
  }
  case ACTIVATE_COMPARING: 
  return {
    ...state, activateComparingValue: action.status
  }
  case SET_CONTENT_WITH_CARD:
    return {
      ...state, contentWithCard: action.content
    } 
   default: 
   return state;
  }
}

export const setFlagAC = value => ({type: SET_FLAG, value})
export const updateItemList = list => ({type: UPDATE_ITEM_LIST, list})
export const setIndexCard = index => ({type: SET_INDEX_CARD, index})
export const setStatusLesson = status => ({type: SET_STATUS_LESSON, status})
export const choiceElementContent = element => ({type: CHOICE_ELEMENT_CONTENT, element})
export const updateStatusCollector = status => ({type: UPDATE_STATUS_COLLECTOR, status})
export const setPuzzleWords = newArr => ({type: SET_PUZZLE_WORDS, newArr})
export const setPreviousWords = words => ({type: SET_PREVIOUS_WORDS, words})
export const updateStatusPuzzlePage = status => ({type: UPDATE_STATUS_PUZZLE_PAGE, status})
export const activateComparing = status => ({type: ACTIVATE_COMPARING, status})
export const deletePreviousWords = () => ({type: DELETE_PREVIOUS_WORDS})
export const setContentWithCard = content => ({type: SET_CONTENT_WITH_CARD, content})


export default storageReducer;