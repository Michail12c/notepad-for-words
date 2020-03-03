const SET_FLAG = 'SET-FLAG';
const UPDATE_ITEM_LIST = 'UPDATE-ITEM-LIST';
const SET_INDEX_CARD = 'SET-INDEX-CARD';
const SET_STATUS_LESSON = 'SET-STATUS-LESSON';
const CHOICE_ELEMENT_CONTENT = 'CHOICE-ELEMENT-CONTENT';  


let initialState = {
  flag: 0,
  itemList: 0,
  statusCard: false, 
  indexCard: 0,
  statusLesson: 0,
  content: '' 
}

let storageReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_FLAG:
      return{
        ...state,
        flag: action.value
      }
    case UPDATE_ITEM_LIST:
      return{
        ...state,
        itemList: action.list
      }
    case SET_INDEX_CARD:
      return{
        ...state,
        indexCard: action.index
      }
    case SET_STATUS_LESSON:
      return {
        ...state,
        statusLesson: action.status
      }
    case CHOICE_ELEMENT_CONTENT:
      return{
        ...state, content: action.element
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
export default storageReducer;