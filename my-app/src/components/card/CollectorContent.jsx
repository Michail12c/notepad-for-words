import React from 'react'; 
import { connect } from 'react-redux';
import StrictCheck from './StrictCheck';
import PuzzleMode from './PuzzleMode';
import { updateStatusCollector } from '../redux/storage-reducer';
import { countWordsThunk } from '../redux/main-reducers';

const CollectorContent = ({statusCollector, contentElement, showWords, repeatList, stateStatus, statusLesson, updateStatusCollector, countWordsThunk, addNewList, indexCard}) => {
  if(statusLesson == 2){
    updateStatusCollector(1); 
  }
  if(statusLesson == 1){
    updateStatusCollector(0)
  }

  let activeContent; 

  switch(statusCollector){
    case 0:
      activeContent = <StrictCheck  contentElement = {contentElement} 
                                    showWords = {showWords} 
                                    repeatList = {repeatList}
                                    stateStatus = {stateStatus}
                                    countWordsThunk = {countWordsThunk} 
                                    indexCard = {indexCard}
                                    addNewList = {addNewList} />
    break
    case 1:
      activeContent = <PuzzleMode   contentElement = {contentElement} 
                                    showWords = {showWords} 
                                    repeatList = {repeatList}
                                    stateStatus = {stateStatus} 
                                    countWordsThunk = {countWordsThunk}
                                    addNewList = {addNewList} 
                                    indexCard = {indexCard} 
                                     />
    break                                  
  }  
  return (
      <div> 

        { activeContent }

      </div>
  )

}

const mapStateToProps = state => {
  return{
    statusCollector: state.storagePage.statusCollector,
    statusLesson: state.storagePage.statusLesson
  }
}

export default connect( mapStateToProps, {updateStatusCollector, countWordsThunk})(CollectorContent); 