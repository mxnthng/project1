import React, { Component } from 'react';
import User from '../../../User/User';

// let Info = JSON.parse(sessionStorage.getItem('info'));

const styles = {
  root: {
    'display': 'flex',
    'justifyContent': 'center',
    'cursor': 'pointer',
  },
  avatar: {
    // 'width': '80%',
    // 'paddingTop': '100%',
    // 'borderRadius': '100%',
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

  
  componentDidMount() {
    console.log("componentdidmount");
    var userinfo = localStorage.getItem('info');
    console.log("userinfo: "+userinfo);
    this.setState({Info: JSON.parse(userinfo)});
    console.log("Info: "+this.state.Info);
  }
  

  callModal = (e) => {
      e.preventDefault();
      this.setState({ isOpen: true });
      // console.log("Info: " + Info);
      // console.log(this.state.Info.userName + " " + this.state.Info.avatar + " " + this.state.Info.email)
  }

  render() {
    console.log("render");
    console.log("Info: "+this.state.Info);
    return (
      <div style={styles.root} onClick={this.callModal}>
        {/* <img alt="Avatar" src={"http://"+this.state.Info.avatar} style={styles.avatar} />
        <User isOpen={this.state.isOpen} userName={this.state.Info.userName} avatar={"http://"+this.state.Info.avatar} email={this.state.Info.email} /> */}
      </div>
    );
  }
}

export default UserAvatar;