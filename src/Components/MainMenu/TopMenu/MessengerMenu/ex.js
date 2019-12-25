import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ChatOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1),
        justifyContent: 'center',
      },
      messenger: {
        width: '70%',
        height: 'auto',
        color: 'white',
      },
}));

export default function MessengerMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ChatOutlined className={classes.messenger} />
    </div>
  );
}