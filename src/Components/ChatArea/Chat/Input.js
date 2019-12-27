import React, { Component } from 'react';
import './Chat.css';

class Input extends Component {
    enterKey(e) {
        if (e.keyCode === 13) {
            this.props.sendMessage(this.refs.message);
        }
    }
    render () {
        return (
            <div className="bottom_wrapper">
                <div className="message_input_wrapper">
                    <input ref="message" className="message_input" placeholder="Nhập tin nhắn..." onKeyUp={(e) => this.enterKey(e)}/>
                </div>
                <div className="send_message" onClick={() => this.props.sendMessage(this.refs.message)}>
                    <div className="icon"></div>
                    <div className="text">Gửi</div>
                </div>
            </div>
        )
    }
}

export default Input;