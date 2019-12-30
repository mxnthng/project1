import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserAvatar from './UserAvatar/UserAvatar';
import FriendMenu from './FriendMenu/FriendMenu';
import MessengerMenu from './MessengerMenu/MessengerMenu';

const styles = {
    root: {
      'display': 'inline-block',
    },
    clearfix: {
        'display': 'block',
        'height' : '25px',
    },
};

class TopMenu extends Component {
  render() {
    return (
      <Router style={styles.root}>
          <div style={styles.clearfix} />
          <div style={styles.clearfix} />
          <UserAvatar />
          <div style={styles.clearfix} />
          <MessengerMenu />
          <FriendMenu />
      </Router>
    );
  }
}

export default TopMenu;