import React, { Component } from 'react';
import { Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    'display': 'flex',
    'justifyContent': 'center',
    'cursor': 'pointer',
  },
  setting: {
    'display': 'block',
    'width': '50px',
    'height': 'auto',
    'position': 'absolute',
    'color': 'white',
    'bottom': '20px',
  }, 
};

class SettingMenu extends Component {
  render() {
    return (
      <Link to='/userinfo' style={styles.root}>
          <Settings bottom style={styles.setting} />
      </Link>
    );
  }
}

export default SettingMenu;