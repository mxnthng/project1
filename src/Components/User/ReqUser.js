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
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    

    acceptHandle = () => {
        let TOKEN = localStorage.getItem('token');
        axios({
            method: 'patch',
            url: 'http://localhost:3000/friend/agreeRequest',
            headers: {
                'user-token': TOKEN
            },
            data: {
                'friendId': this.props._id
            }
        }).then(res => {
            // console.log(res.data);
            alert("Đã đồng ý kết bạn!");
            this.setState({redirect: true});
        }).catch(err => {
            alert("Có lỗi xảy ra, vui lòng refresh trang");
            console.log(err);
        });
    }

    render() {
        if (this.state.redirect) {
            window.location.reload();
          }

        return (
            <div>
                <Popup open={this.props.isOpen} closeOnDocumentClick modal contentStyle={styles.popups}>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}> &times; </button>
                            <div className="fix"></div>
                            <div className="avatar">
                                <img alt="avatar" className="img" src={this.props.avatar} />
                                {/* (this.props.avatar=="http://undefined")?"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png":this.props.avatar */}
                            </div>
                            <div className="name"> {this.props.userName} </div>
                            <div className="email"> Email: {this.props.email} </div>
                            <div className="accept">
                                <Button className="acceptbutton" onClick={this.acceptHandle}> Chấp nhận </Button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default ReqUser;