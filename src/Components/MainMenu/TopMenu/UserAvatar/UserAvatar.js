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
      Info: {
        userName: JSON.parse(localStorage.getItem('info')).userName,
        email: JSON.parse(localStorage.getItem('info')).email,
        _id: JSON.parse(localStorage.getItem('info'))._id,
        avatar: JSON.parse(localStorage.getItem('info')).avatar
      },
    };
  }
  
  // componentDidMount() {
  //   const Info2 = JSON.parse(localStorage.getItem('info'));
  //   console.log(Info2.avatar);
  //   const abc = Object.assign({}, Info2);
  //   console.log(abc);
  //   Info1 = Object.assign({}, Info2);
  //   console.log("test: "+Info1);
  //   // this.setState({ Info: abc });
  //   // console.log("Info state: "+this.state.Info);
  // }  

  callModal = (e) => {
      e.preventDefault();
      this.setState({ isOpen: true });
      // console.log("Info: " + Info);
      // console.log(Info.userName + " " + Info.avatar + " " + Info.email)
  }

  render() {
    console.log(this.state.Info);
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