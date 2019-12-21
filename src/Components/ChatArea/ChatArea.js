import React, { Component } from 'react';
import ChatBox from './Chatbox/Chatbox';

const styles = {
    root: {
        'float': 'left',
        'width': 'calc(100% - 440px)',
        'height': '100vh',
        'borderLeft': "1px solid rgb(212, 212, 212)",
    },
};

class TabArena extends Component {
    render() {
        return (
            <div style={styles.root}>
                <ChatBox />
            </div>
        );
    }
}

export default TabArena;