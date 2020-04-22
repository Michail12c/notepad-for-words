import React from 'react'
import ReactPlayer from 'react-player'
import style from './NewLessons.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';
import MediaCard from '../material/card';



const VideoMode = () => {
  let masUrl = [{url: "https://www.youtube.com/watch?v=i96VS_z8y7g", name: "Хрещенний батько"}, {url: "https://www.youtube.com/watch?v=15Ucj4YFosk", name: "Хрещенний батько 2"}]
  const [test, setTest] = useState(false)
  const [activeUrl, setActiveUrl] = useState(masUrl[0].url)  
  let url = activeUrl 

 

  return(
    <div className = {style.videoMode}>
      { !test 
         ? <VerticalTabs setTest = {setTest} 
                         setActiveUrl = {setActiveUrl}
                         masUrl = {masUrl} />
         : <Fade>
              
                <ReactPlayer  url={url}
                              youtubeConfig={{ playerVars:{ 
                                showinfo: 1, 
                                controls: 2,
                                autoplay: 1,
                                modestbranding: 1 }}}
                                playing />
                <div>
                  <button onClick = {() => setTest(false)}>come back</button>
                </div>
              </Fade>
      }
    </div>
  )
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      className = {style.sectionTypography}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(191, 216, 175)",
    display: 'flex',
    height: 'max-content',
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

 function VerticalTabs({setTest, setActiveUrl, masUrl}) {

   console.log(masUrl)

  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  let contentMiddle = masUrl.map((el, index) =>  <MediaCard key = {index} width = {150} 
                                          height =  {120} 
                                          content = {el.name} 
                                          callback = {() => setTest(true)}
                                          cardHeight= {250}
                                          choiceVideo = {() => setActiveUrl(el.url)} />  )
  return (
    <Fade>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <button onClick = {() => setTest(true)}>click</button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className = {style.sectionRoot}>
            {contentMiddle}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
  </Fade>
  );
}


export default VideoMode 