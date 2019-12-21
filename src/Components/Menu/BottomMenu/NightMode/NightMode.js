import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1),
        justifyContent: 'center',
      },
      switchbutton: {
        position: 'absolute',
        bottom: 90,
      }, 
}));

export default function NightMode() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
        <Switch
        className={classes.switchbutton}
        checked={state.checked}
        onChange={handleChange('checked')}
        value="checked"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    </div>
  );
}