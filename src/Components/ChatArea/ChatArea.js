import React, { Component } from 'react';
import ChatAreaMess from './ChatAreaMess';

const styles = {
    root: {
        'float': 'left',
        'width': 'calc(100% - 398px)',
        'height': '100vh',
        'borderLeft': "1px solid rgb(212, 212, 212)",
        'backgroundColor': 'white',
    },
};

class ChatArea extends Component {
    render() {
        return (
            <div style={styles.root}>
                <ChatAreaMess />
            </div>
        );
    }
}

export default ChatArea;