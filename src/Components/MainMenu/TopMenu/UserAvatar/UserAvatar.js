import React, { Component } from 'react';
import User from '../../../User/User';
import axios from 'axios';

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
    const TOKEN = localStorage.getItem('token');
    // console.log("token" + TOKEN);
    axios({
      method: 'get',
      url: 'http://localhost:3000/user/profile',
      headers: {
          'user-token': TOKEN
      }
    }).then(res => {
      // console.log(res.data);
      // localStorage.setItem("info", JSON.stringify(res.data));
      // let infomation = JSON.parse(localStorage.getItem('info'));
      this.setState({ Info: res.data });
    }).catch(err => {
      // console.log(TOKEN);
      console.log(err);
    });
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