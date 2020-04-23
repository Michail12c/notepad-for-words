import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import success from '../images/sukses.jpg'



export default function MediaCard({width, height, content,  callback, cardHeight, choiceVideo, img}) {

  const useStyles = makeStyles({
    root: {
      maxWidth: width,
      maxHeight: cardHeight,
      marginRight: '20px',
      marginBottom: '20px'
    },
    media: {
      height: height,
    },
  });
const startFunction = () => {
  callback()
  choiceVideo()
}
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {startFunction}>
          Play
        </Button>
      </CardActions>
    </Card>
  );
}
