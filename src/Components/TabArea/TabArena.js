import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import Item from './Item/Item';

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

class TabArena extends Component {
    render() {
        return (
            <div style={styles.root}>
                <SearchBox />
                <div style= {styles.clearfix} ></div>                
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}

export default TabArena;