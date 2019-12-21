import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PeopleAltOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(1),
    justifyContent: 'center',
  },
  friend: {
    width: '70%',
    height: 'auto',
    color: 'white',
  }, 
}));

export default function FriendMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PeopleAltOutlined className={classes.friend} />
    </div>
  );
};