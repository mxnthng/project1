import React, { Component } from 'react';
import Input from './Chat/Input';
import ChatHeader from './Chat/ChatHeader';
import MessageItem from './Chat/MessageItem';
import MessageList from './Chat/MessageList';

const styles = {
    root: {
        'float': 'left',
        'width': 'calc(100% - 398px)',
        'height': '100vh',
        'borderLeft': "1px solid rgb(212, 212, 212)",
        'backgroundColor': 'white',
    },
    chatbody: {
        'padding': '20px',
    },
};

class TabArena extends Component {
    render() {
        return (
            <div style={styles.root}>
                <ChatHeader />
                <div style={styles.chatbody}>
                    <MessageItem isMyMes={true} message="Tin nhắn đi" />
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

export default TabArena;