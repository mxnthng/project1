import React, { Component } from 'react';
import { Settings } from '@material-ui/icons';

const styles = {
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
};

class SettingMenu extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Settings bottom style={styles.setting} />
      </div>
    );
  }
}

export default SettingMenu;