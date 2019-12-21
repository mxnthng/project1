import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Settings } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    'display': 'flex',
    'justifyContent': 'center',
  },
  setting: {
    'display': 'block',
    'width': 50,
    'height': 'auto',
    'position': 'absolute',
    'bottom': 20,
    'color': 'white',
  }, 
}));

export default function SettingMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Settings bottom className={classes.setting} />
    </div>
  );
}