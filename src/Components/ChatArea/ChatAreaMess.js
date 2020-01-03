import React, { Component } from 'react';
import Input from './Chat/Input';
import ChatHeader from './Chat/ChatHeader';
import MessageItem from './Chat/MessageItem';

const styles = {
    chatbody: {
        'padding': '20px',
    },
};

class ChatAreaMess extends Component {
    render() {
        return (
            <div>
                {/* <ChatHeader /> */}
                <div style={styles.chatbody}>
                    <MessageItem isMyMes='true' message="Tin nhắn đi" />
                    <MessageItem isMyMes={false} message="Tin nhắn đến" />
                    <MessageItem isMyMes={true} message="alo 123" />
                    <MessageItem isMyMes={true} message="Tin nhắn đi" />
                    <MessageItem isMyMes={true} message="Tin nhắn đi" />
                    <MessageItem isMyMes={true} message="Tin nhắn đi" />
                </div>
                <Input />
            </div>
        );
    }
}

export default ChatAreaMess;