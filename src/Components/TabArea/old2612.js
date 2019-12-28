import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import ItemMess from './Item/ItemMess';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TabAreaMess from './TabAreaMess';
import TabAreaFriend from './TabAreaFriend';

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
            <Router>
                <div style={styles.root}>
                    <SearchBox />
                    <Switch>
                        <Route path="/message" component={TabAreaMess} />
                        <Route path="/friend" component={TabAreaFriend} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default TabArea;