import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(1),
    justifyContent: 'center',
  },
  avatar: {
    width: '70%',
    height: 'auto',
  },
}));

const img = '/default_avatar.jpg';

export default function UserAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Avatar" src={img} className={classes.avatar} />
    </div>
  );
}