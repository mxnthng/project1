import React, { Component } from 'react';
import './item.css'
import Friend from '../../User/User';

class Item extends Component {
    constructor(){
        super();
        this.state = { isModalOpen: false };
    }
    callModal = () => {
        this.setState({ isModalOpen: true });
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
                <Friend isOpen={this.state.isModalOpen} />
            </div>
        );
    }
}

export default Item;