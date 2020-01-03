import React, { Component } from 'react';
import './Chat.css';
import User from '../../User/User';

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
                <User isOpen={this.state.isOpen} userName={Info.userName} avatar={"http://"+Info.avatar} email={Info.email} />
            </div>
        );
    }
}

export default ChatHeader;