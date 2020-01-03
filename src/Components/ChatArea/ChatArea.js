import React, { Component } from 'react';

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
                {this.props.children}
            </div>
        );
    }
}

export default ChatArea;