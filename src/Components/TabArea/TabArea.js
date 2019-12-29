import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ItemMess from './Item/ItemMess';

const styles = {
    root: {
        'float': 'left',
        'width': '332px',
        'height': '100vh', //height cũ trong file old
        'backgroundColor': 'white',
    },
    clearfix: {
        'display': 'inline-block',
        'height' : '10px',
    },
};

class TabArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : [
                {
                    itemAvatar: "#",
                    itemName: "Tên",
                    lastMess: "Tin nhắn"
                },
            ]
        }
    }

    showItemMess = () => {
        const listItem = this.state.items.map((item, index) => 
            <ItemMess key={index} itemAvatar={item.avatar} itemName={item.itemName} lastMess={item.lastMess} />
        );
        return listItem;
    }
    
    render() {
        return (
            <div style={styles.root}>
                <SearchBox />
                {this.props.children}
            </div>
        );
    }
}

export default TabArea;