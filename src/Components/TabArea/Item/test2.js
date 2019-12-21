import React, { Component } from 'react';

const styles = {
    root: {
        'height': '50px',
        'padding': '12px 16px 12px 14px',
        "&:hover": {
            background: "#efefef"
        },
    },
};

class Item extends Component {
    render() {
        return (
            <div style={ styles.root }>
                
            </div>
        );
    }
}

export default Item;