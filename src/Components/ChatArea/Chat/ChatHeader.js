import React, { Component } from 'react';
import './Chat.css';
import User from '../../User/User';

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
                    Tên bạn chat
                </div>
                <User isOpen={this.state.isOpen} userName="" avatar={"http://"} email="" />
            </div>
        );
    }
}

export default ChatHeader;