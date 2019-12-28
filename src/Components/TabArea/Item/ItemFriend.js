import React, { Component } from 'react';
import './item.css'
import CallPopup from '../../User/CallPopup';

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
            <div className="item" onClick={<CallPopup />}>
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
            </div>
        );
    }
}

export default Item;