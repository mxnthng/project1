import React, { Component } from 'react';
import ItemFriend from './Item/ItemFriend';

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
                <ItemFriend itemAvatar="#" itemName="Bạn bè 1" />
                <ItemFriend itemAvatar="#" itemName="Bạn bè 2" />
                <div style={styles.fix}></div>
                <div style={styles.folder}>Danh sách bạn bè</div>
                <ItemFriend itemAvatar="#" itemName="Bạn bè 1" />
            </div>
        );
    }
}

export default TabAreaFriend;