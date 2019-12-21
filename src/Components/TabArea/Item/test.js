import React, { Component } from 'react';

const styles = {
    root: {
        'height': '50px',
        'padding': '12px 16px 12px 14px',
    },
};

class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    hover() {
        this.setState({hover:!this.state.hover})
    }

    render() {
        var hoverStyle;
        if (this.state.hover) {
            hoverStyle = {color: 'red'}
        } else {
            hoverStyle = {color: 'white'}
        }
        return (
            <div style={ styles.root, hoverStyle } onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                
            </div>
        );
    }
}

export default Item;