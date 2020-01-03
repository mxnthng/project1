import React, { Component } from 'react';
import ListFriend from './Item/ListFriend';
import ListRequest from './Item/ListRequest';

const styles = {
    folder: {
        'borderTop': "1px solid rgb(212, 212, 212)",
        'paddingLeft': '15px',
        'paddingTop': '5px',
        'paddingBottom': '5px',
    },
    fix: {
        'height': '15px',
    }
}

class TabAreaFriend extends Component {
    render() {
        return (
            <div>
                <div style={styles.folder}>Danh sách kết bạn</div>
                <ListRequest />
                <div style={styles.fix}></div>
                <div style={styles.folder}>Danh sách bạn bè</div>
                <ListFriend />
            </div>
        );
    }
}

export default TabAreaFriend;