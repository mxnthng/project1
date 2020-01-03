import React, { Component } from 'react';
import './item.css'

import User from '../../User/User';

class ItemFriend extends Component {
    constructor(){
        super();
        this.state = { 
            isOpen: false,
         };
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
                            <img alt="avatar" className="avatar" src={this.props.avatar} />
                        </div>
                    </div>
                    <div className="item_content_friend">
                        <div className="name_container">
                            <div className="item_name">
                                {this.props.userName}
                            </div>
                        </div>
                    </div>
                </div>
                <User isOpen={this.state.isOpen} avatar={this.props.avatar} userName={this.props.userName} email={this.props.email}  />
            </div>
        );
    }
}

export default ItemFriend;