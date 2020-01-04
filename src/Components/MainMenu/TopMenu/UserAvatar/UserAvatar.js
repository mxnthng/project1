import React, { Component } from 'react';
import User from '../../../User/User';

// let Info = JSON.parse(sessionStorage.getItem('info'));
// let Info = JSON.parse(localStorage.getItem('info'));

const styles = {
  root: {
    'display': 'flex',
    'justifyContent': 'center',
    'cursor': 'pointer',
  },
  avatar: {
    'objectFit': 'cover',
    'borderRadius': '50%',
    'width': '53px',
    'height': '53px',
  },
};

class UserAvatar extends Component {
  constructor(){
    super();
    this.state = { 
      isOpen: false,
      Info: {},
    };
  }

  callModal = (e) => {
      e.preventDefault();
      this.setState({ isOpen: true });
      // console.log("Info: " + Info);
  }

  UNSAFE_componentWillMount() {
    let infomation = JSON.parse(localStorage.getItem('info'));
    this.setState({ Info: infomation });
  }

  render() {
    return (
      <div style={styles.root} onClick={this.callModal}>
        <img alt="Avatar" src={"http://"+this.state.Info.avatar} style={styles.avatar} />
        <User isOpen={this.state.isOpen} userName={this.state.Info.userName} avatar={"http://"+this.state.Info.avatar} email={this.state.Info.email} />

        {/* <img alt="Avatar" src={"http://"+Info.avatar} style={styles.avatar} />
        <User isOpen={this.state.isOpen} userName={Info.userName} avatar={"http://"+Info.avatar} email={Info.email} /> */}
      </div>
    );

  }
}

export default UserAvatar;