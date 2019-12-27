import React, { Component } from 'react';
import MessageItem from './MessageItem';
import './Chat.css';

class MessageList extends Component {
    render() {
        return (
            <div>
                <ul className="messages">
                {this.props.messages.map(item =>
                    <MessageItem key={item.id} user={item.userId === this.props.user? true: false} message={item.message}/>
                )}
                </ul>
            </div>
        );
    }
}

export default MessageList;