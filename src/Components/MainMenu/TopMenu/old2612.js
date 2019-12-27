import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserAvatar from './UserAvatar/UserAvatar';
import MessengerMenu from './MessengerMenu/MessengerMenu';
import FriendMenu from './FriendMenu/FriendMenu';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'inline-block',
    },
    clearfix: {
        display: 'block',
        height : 20,
    }
}));

export default function TopMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.clearfix} />
        <div className={classes.clearfix} />

        <UserAvatar />

        <div className={classes.clearfix} />
        <div className={classes.clearfix} />
        <div className={classes.clearfix} />

        <MessengerMenu />

        <div className={classes.clearfix} />

        <FriendMenu />

    </div>
  );
}