import React, { Component } from 'react';
import './Chat.css';

class MessageItem extends Component {
    render() {
        return (
            // isMyMes : xác định tin nhắn có phải do mình gửi không
            <div className={this.props.isMyMes ? "message right appeared": "message left appeared"}>
                <div className="avatar"></div>
                <div className="text_wrapper">
                    <div className="text">{this.props.message}</div>
                </div>
            </div>
        );
    }
}

export default MessageItem;