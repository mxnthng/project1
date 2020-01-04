import React, { Component } from 'react';
import { ChatOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  childrenmenu: {
        'display': 'flex',
        'justifyContent': 'center',
        'height': '60px',
        'width': '66px',
      },
      icon: {
        'width': '80%',
        'height': 'auto',
        'color': 'white',
      },
};

class MessengerMenu extends Component {
  render() {
    return (
      <Button style={styles.childrenmenu}>
        <Link to="/message">
          <ChatOutlined style={styles.icon} /> 
        </Link>
      </Button>
    );
  }
};

export default MessengerMenu;