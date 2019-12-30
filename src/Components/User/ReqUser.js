import React, { Component } from 'react';
import Popup from "reactjs-popup";
import './User.css';
import { Button } from '@material-ui/core';
import axios from 'axios';

const styles = {
    popups : {
        'width': '360px',
        'height': '35vh',
    }
}

class ReqUser extends Component {
    accept = (e) => {
        e.preventDefault();
        // axios({
        //   method: 'put',
        //   url: 'http://localhost:3000/friend/agreeRequest',
        //   headers: {
        //     
        //   }
        // }).then(res => {
        //     console.log(res);
        //     alert("Đăng nhập thành công!");
        //     this.setState({ isUser: true });
        //     // console.log(this.state.isUser);
        //     let token = res.data;
        //     localStorage.setItem("token", token);
        // }).catch(err => {
        //     alert(err);
        // });
    }

    render() {
        return (
            <div>
                <Popup open={this.props.isOpen} closeOnDocumentClick modal contentStyle={styles.popups}>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}> &times; </button>
                            <div className="fix"></div>
                            <div className="avatar"> <img alt="avatar" src={this.props.avatar } /> </div>
                            <div className="name"> {this.props.userName} </div>
                            <div className="email"> Email: {this.props.email} </div>
                            <div className="accept"> <Button className="acceptbutton" onClick={this.accept}> Chấp nhận </Button> </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default ReqUser;