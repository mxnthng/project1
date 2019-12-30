import React, { Component } from 'react';
import './Chat.css';
import User from '../../User/User';
import UserInfo from '../../UserInfo/UserInfo';

let Info = JSON.parse(localStorage.getItem('info'));

class ChatHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "User Name",
            isOpen: false,
        }
    }
    callModal = () => {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <div className="chat_header">
                <div className="user_name" onClick={this.callModal}>
                    {Info.userName}
                </div>
                <User isOpen={this.state.isOpen} userName={Info.userName} avatar={Info.avatar} email={Info.email} />
                <UserInfo />
            </div>
        );
    }
}

export default ChatHeader;