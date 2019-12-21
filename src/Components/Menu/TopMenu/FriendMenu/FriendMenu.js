import React, { Component } from 'react';
import { PeopleAltOutlined } from '@material-ui/icons';

const styles = {
  root: {
    'display': 'flex',
    'justifyContent': 'center',
  },
  friend: {
    'width': '70%',
    'height': 'auto',
    'color': 'white',
  }, 
};

class FriendMenu extends Component {
  render() {
    return (
      <div style={styles.root}>
        <PeopleAltOutlined style={styles.friend} />
      </div>
    );
  }
};

export default FriendMenu;