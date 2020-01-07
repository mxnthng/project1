import React, { Component } from 'react';
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
      <div style={styles.root}>
        <div style={styles.clearfix} />
        <div style={styles.clearfix} />
        <UserAvatar />
        <div style={styles.clearfix} />
        <MessengerMenu />
        <FriendMenu />
      </div>
    );
  }
}

export default TopMenu;