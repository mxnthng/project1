import React, { Component } from 'react';
import ListMess from './Item/ListMess';

const styles = {
    folder: {
        'borderTop': "1px solid rgb(212, 212, 212)",
        'paddingLeft': '15px',
        'paddingTop': '5px',
        'paddingBottom': '5px',
    },
}

class TabAreaMess extends Component {
    render() {
        return (
            <div>
                <div style={styles.folder}>Tin nhắn</div>
                <ListMess />
            </div>
        );
    }
}

export default TabAreaMess;