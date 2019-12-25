import React, { Component } from 'react';
import { ChatOutlined } from '@material-ui/icons';

const styles = {
    root: {
        'display': 'flex',
        'justifyContent': 'center',
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
      <div style={styles.root}>
          <ChatOutlined style={styles.messenger} />
      </div>
    );
  }
};

export default MessengerMenu;