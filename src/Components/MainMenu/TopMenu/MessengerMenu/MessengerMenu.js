import React, { Component } from 'react';
import { ChatOutlined } from '@material-ui/icons';
import '../TopMenu.css';

const styles = {
    root: {
        'display': 'flex',
        'justifyContent': 'center',
        'height': '60px',
        'width': '66px',
      },
      messenger: {
        'width': '70%',
        'height': 'auto',
        'color': 'white',
      },
};

class MessengerMenu extends Component {
  render() {
    return (
      <div style={styles.root} className="clickable">
          <ChatOutlined style={styles.messenger} />
      </div>
    );
  }
};

export default MessengerMenu;