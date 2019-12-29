import React, { Component } from 'react';
import './item.css'
import CallPopup from '../../User/CallPopup';
import User from '../../User/User';

class Item extends Component {
    constructor(){
        super();
        this.state = { isOpen: false };
    }
    
    callModal = (e) => {
        e.preventDefault();
        this.setState({ isOpen: true });
    }
    
    render() {
        return (
            <div className="item" onClick={this.callModal}>
                <div className="item_inside">
                    <div className="avatar_container">
                        <div className="avatar">
                            {this.props.itemAvatar}
                        </div>
                    </div>
                    <div className="item_content_friend">
                        <div className="name_container">
                            <div className="item_name">
                                {this.props.itemName}
                            </div>
                        </div>
                    </div>
                </div>
                <User isOpen={this.state.isOpen} />
            </div>
        );
    }
}

export default Item;