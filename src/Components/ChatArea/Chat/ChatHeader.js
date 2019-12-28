import React, { Component } from 'react';
import './Chat.css';
import Friend from '../../User/User';

class ChatHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "User Name",
            isModalOpen: false,
        }
    }
    callModal = () => {
        this.setState({ isModalOpen: true });
    }
    render() {
        return (
            <div className="chat_header">
                <div className="user_name" onClick={this.callModal}>
                    {this.state.name}
                </div>
                <Friend isOpen={this.state.isModalOpen} /> 
            </div>
        );
    }
}

export default ChatHeader;