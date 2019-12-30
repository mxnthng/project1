import React, { Component } from 'react';
import { PeopleAltOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  childrenmenu: {
    'display': 'flex',
    'justifyContent': 'center',
  },
  icon: {
    'width': '80%',
    'height': 'auto',
    'color': 'white',
  }, 
};

class FriendMenu extends Component {
  render() {
    return (
      <Button style={styles.childrenmenu}>
        <Link to="/friend">
          <PeopleAltOutlined style={styles.icon} />
        </Link>
      </Button>
    );
  }
};

export default FriendMenu;