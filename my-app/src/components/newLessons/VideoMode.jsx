import React from 'react'
import ReactPlayer from 'react-player'
import style from './NewLessons.module.css'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu, popupState } from 'material-ui-popup-state'


const VideoMode = () => {
  let masUrl = ["https://www.youtube.com/watch?v=i96VS_z8y7g", "https://www.youtube.com/watch?v=15Ucj4YFosk"]

  const [activeUrl, setActiveUrl] = useState(masUrl[0])  
  let url = activeUrl 

  const choiceUrl = (callback, index) => {
    callback()
    setActiveUrl(masUrl[index])
  }




  return(
    <div className = {style.videoMode}>
       <MenuVideo choiceUrl = {choiceUrl} />
      <div>
      <ReactPlayer  url={url}
                    youtubeConfig={{ playerVars:{ 
                      showinfo: 1, 
                      controls: 2,
                      autoplay: 1,
                      modestbranding: 1 }}}
                      playing />
      </div>
       <div>
         here will me translate
       </div>
    </div>
  )
}


const MenuVideo = ({choiceUrl}) => {
  return (
    <div>
         <div>
            <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
          <React.Fragment>
            <Button variant="contained" className = {style.buttonMode} color="primary" {...bindTrigger(popupState)}>
              Легкий рівень
            </Button>
            <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={() => choiceUrl(popupState.close, 0)}>test</MenuItem>
              <MenuItem onClick={() => choiceUrl(popupState.close, 1)}>Інше</MenuItem>
          <MenuItem onClick={() => choiceUrl(popupState.close, 1)}>test2</MenuItem>
            </Menu>
          </React.Fragment>
  
        )}
        </PopupState>
        </div>

        <div>
            <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
          <React.Fragment>
            <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
             Середній рівень
            </Button>
            <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={() => choiceUrl(popupState.close, 0)}>test</MenuItem>
          <MenuItem onClick={() => choiceUrl(popupState.close, 1)}>test2</MenuItem>
            </Menu>
          </React.Fragment>
  
        )}
        </PopupState>
        </div>
    </div>
  ) 
}



export default VideoMode 