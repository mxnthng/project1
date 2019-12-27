import React, { Component } from 'react';
import ItemMess from './Item/ItemMess';

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
                <ItemMess itemAvatar="#" itemName="Tin nhắn nè" lastMess="alo 123" /> 
            </div>
        );
    }
}

export default TabAreaMess;