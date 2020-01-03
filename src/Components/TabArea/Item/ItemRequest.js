import React, { Component } from 'react';
import './item.css'

import ReqUser from '../../User/ReqUser';

class ItemRequest extends Component {
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
                        <img alt="avatar" className="avatar" src={this.props.avatar} />
                    </div>
                    <div className="item_content_friend">
                        <div className="name_container">
                            <div className="item_name">
                                {this.props.userName}
                            </div>
                        </div>
                    </div>
                </div>
                <ReqUser isOpen={this.state.isOpen} avatar={this.props.avatar} userName={this.props.userName} email={this.props.email} _id={this.props._id} />
            </div>
        );
    }
}

export default ItemRequest;