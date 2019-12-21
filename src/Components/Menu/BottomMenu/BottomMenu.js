import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingMenu from './SettingMenu/SettingMenu';
import NightMode from './NightMode/NightMode';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
    },
    clearfix: {
      display: 'block',
      height : 20,
      position: 'absolute',
      bottom: 0,
    }
}));

export default function TopMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <SettingMenu />

        <NightMode />

    </div>
  );
}