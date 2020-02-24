import React from 'react';
import Lesson from './Lesson';
import { connect } from 'react-redux';
import { addWordsThunkTwoList, initializeMain, removeWordsFromListThunk, updateOutputOrder} from '../redux/main-reducers';
import { updateItemList, setIndexCard} from '../redux/storage-reducer';

const mapStateToProps = (state) => {
  return {
    content: state.mainPage.listWords,
    listWordsTwo: state.mainPage.listWordsTwo,
    listUser: state.mainPage.listUser,
    newList: state.mainPage.newList,
    itemList: state.storagePage.itemList,
    indexCard: state.storagePage.indexCard,
    outputOrder: state.mainPage.outputOrder
  }
}
const LessonContainer = connect(mapStateToProps, {addWordsThunkTwoList, initializeMain,updateItemList,setIndexCard, removeWordsFromListThunk, updateOutputOrder })(Lesson);
export default LessonContainer;