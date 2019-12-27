import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ItemMess from './Item/ItemMess';

const styles = {
    root: {
        'float': 'left',
        'width': '332px',
        'height': 'calc(100vh-20px)',
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
                    itemName: "An",
                    lastMess: "Đi chơi game đê"
                },
                {
                    itemAvatar: "#",
                    itemName: "Yến",
                    lastMess: "Đi ngủ cho ấm đê"
                },
                {
                    itemAvatar: "#",
                    itemName: "Bình",
                    lastMess: "Đi học đê"
                },
                {
                    itemAvatar: "#",
                    itemName: "Dương",
                    lastMess: "Đi đánh bài ăn tiền đê"
                },
                {
                    itemAvatar: "#",
                    itemName: "Tâm",
                    lastMess: "Đi code cho xong cái project đê"
                },
            ]
        }
    }

    showItem = () => {
        const listItem = this.state.items.map((item, index) => 
            <ItemMess key={index} itemAvatar={item.avatar} itemName={item.itemName} lastMess={item.lastMess} />
        );
        return listItem;
    }
    
    render() {
        return (
            <div style={styles.root}>
                <SearchBox />
                <div style= {styles.clearfix} ></div>                
                { this.showItem() }
            </div>
        );
    }
}

export default TabArea;