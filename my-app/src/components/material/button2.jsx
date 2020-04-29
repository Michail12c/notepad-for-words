import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'rgb(63, 184, 184)'
    }, 
  },
}));

export default function TextButtons({title, callback}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick = {callback} color="primary">{title}</Button>
    </div>
  );
}