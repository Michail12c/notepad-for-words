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
import { connect } from 'react-redux';
import TextButtons from '../material/button';



const VideoMode = ({videoList}) => {

  const [test, setTest] = useState(false)
  const [activeUrl, setActiveUrl] = useState(videoList[0][0].url)  
  let url = activeUrl 

  return(
    <div className = {style.videoMode}>
      { !test 
         ? <VerticalTabs setTest = {setTest} 
                         setActiveUrl = {setActiveUrl}
                         videoList = {videoList}/>
         : <Fade>
            <div className = {style.sectionPlayer}>
             <div className={style.frame_blc}>
               <ReactPlayer    url={url}
                                youtubeConfig={{ playerVars:{ 
                                showinfo: 1, 
                                controls: 2,
                                autoplay: 1,
                                width: '90%',
                                height: '90%',
                                marginRight: '1rem',
                                marginLeft: '1rem',
                                modestbranding: 1 }}}
                                playing />
             </div>
                <div>
                  <TextButtons callback = {() => setTest(false)} title = {'Сховати'}/>
                </div>
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
    height: 'max-content'
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

 function VerticalTabs({setTest, setActiveUrl, videoList}) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let contentBeginner = videoList[0].map((el, index) =>  <MediaCard key={index} width={150} height={120} img = {el.img} content = {el.name} callback = {() => setTest(true)}
  cardHeight= {250} choiceVideo = {() => setActiveUrl(el.url)} /> )
 
  let contentMiddle = videoList[1].map((el, index) =>  <MediaCard key={index} width={150} height={120} img = {el.img} content = {el.name} callback = {() => setTest(true)}
  cardHeight= {250} choiceVideo = {() => setActiveUrl(el.url)} /> )

  let contentTop = videoList[2].map((el, index) =>  <MediaCard key={index} width={150} height={120} img = {el.img} content = {el.name} callback = {() => setTest(true)}
  cardHeight= {250} choiceVideo = {() => setActiveUrl(el.url)} /> )

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
          <Tab label="Легкий рівень" {...a11yProps(0)} />
          <Tab label="Середній рівень" {...a11yProps(1)} />
          <Tab label="Складний рівень" {...a11yProps(2)} />
        </Tabs>
        <TabPanel className={style.tabSection} value={value} index={0}>
        <div className = {style.sectionRoot}> 
          {contentBeginner}
        </div>  
        </TabPanel>
        <TabPanel className={style.tabSection}  value={value} index={1}>
          <div className = {style.sectionRoot}>
            {contentMiddle}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className = {style.sectionRoot}>
           {contentTop}
         </div>  
        </TabPanel>
      </div>
  </Fade>
  );
}

const mapStateToProps = state => {
  return {
    videoList: state.mainPage.videoList
  }
}

export default connect(mapStateToProps, {})(VideoMode) 