import React, { Component } from 'react';
import User from '../../../User/User';
import UserInfo from '../../../UserInfo/UserInfo';

// let Info = JSON.parse(sessionStorage.getItem('info'));
let Info = JSON.parse(localStorage.getItem('info'));

const styles = {
  root: {
    'display': 'flex',
    'justifyContent': 'center',
    'cursor': 'pointer',
  },
  avatar: {
    'width': '80%',
    'height': 'auto',
  },
};

class UserAvatar extends Component {
  constructor(){
    super();
    this.state = { 
      isOpen: false, 
    };
  }

  callModal = (e) => {
      e.preventDefault();
      this.setState({ isOpen: true });
      // console.log("Info: " + Info);
      console.log(Info.userName + " " + Info.avatar + " " + Info.email)
  }

  render() {
    return (
      <div style={styles.root} onClick={this.callModal}>
        <img alt="Avatar" src="#" style={styles.avatar} />
        <User isOpen={this.state.isOpen} userName={Info.userName} avatar={Info.avatar} email={Info.email} />
        <UserInfo />
      </div>
    );
  }
}

export default UserAvatar;