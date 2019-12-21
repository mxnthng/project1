import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { AccountCircle } from '@material-ui/icons';

const styles = {
  root: {
    'display': 'flex',
    'justifyContent': 'center',
  },
  avatar: {
    'width': '70%',
    'height': 'auto',
  },
};

class UserAvatar extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Avatar alt="Avatar" src="#" style={styles.avatar} />
      </div>
    );
  }
}

export default UserAvatar;