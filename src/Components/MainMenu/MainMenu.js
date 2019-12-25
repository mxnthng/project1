import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from './TopMenu/TopMenu';
import BottomMenu from './BottomMenu/BottomMenu'

const useStyles = makeStyles(theme => ({
    root: {
        float: 'left',
        width: 66,
        height: '100vh',
        background: 'linear-gradient(45deg, #26a69a 30%, #56B4D3 90%)',
    },
}));

export default function MainMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />

      <BottomMenu />
    </div>
  );
}