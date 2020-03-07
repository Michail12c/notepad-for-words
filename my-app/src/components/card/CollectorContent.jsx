import React from 'react'; 
import { connect } from 'react-redux';
import StrictCheck from './StrictCheck';
import PuzzleMode from './PuzzleMode';
import { updateStatusCollector } from '../redux/storage-reducer';

const CollectorContent = ({statusCollector, contentElement, showWords, repeatList, stateStatus, statusLesson, updateStatusCollector}) => {

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
                                    stateStatus = {stateStatus}/>
    break
    case 1:
      activeContent = <PuzzleMode   contentElement = {contentElement} 
                                    showWords = {showWords} 
                                    repeatList = {repeatList}
                                    stateStatus = {stateStatus} />
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

export default connect( mapStateToProps, {updateStatusCollector})(CollectorContent); 