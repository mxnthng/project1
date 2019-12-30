import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { PeopleAltOutlined, ChatOutlined } from '@material-ui/icons';
import { Avatar, Button } from '@material-ui/core';

const styles = {
    root: {
      'display': 'inline-block',
    },
    clearfix: {
        'display': 'block',
        'height' : '20px',
    },
    childrenmenu: {
      'display': 'flex',
      'justifyContent': 'center',
      'height': '66px',
      'width': '66px',
      'cursor': 'pointer',
    },
    avatar: {
      'width': '80%',
      'height': 'auto',
    },
    icon: {
      'width': '80%',
      'height': 'auto',
      'color': 'white',
    },
};

class TopMenu extends Component {


  render() {
    return (
      <Router>
      <div style={styles.root}>
          <div style={styles.clearfix} />

          <div style={styles.childrenmenu}>
            <Avatar alt="Avatar" src="#" style={styles.avatar} />
          </div>

          <div style={styles.clearfix} />

          <Button style={styles.childrenmenu}>
            <Link to="/message">
              <ChatOutlined style={styles.icon} />
            </Link>
          </Button>

          <Button style={styles.childrenmenu}>
            <Link to="/friend">
              <PeopleAltOutlined style={styles.icon} />
            </Link>
          </Button>
      </div>
      </Router>
    );
  }
}

export default TopMenu;