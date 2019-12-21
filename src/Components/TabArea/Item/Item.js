import React, { Component } from 'react';
import './item.css'

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="item_inside">
                    <div className="avatar_container">
                        <div className="avatar">
                            avatar
                        </div>
                    </div>
                    <div className="item_content">
                        <div className="name_container">
                            <div className="item_name">
                                Ten test chua mapping
                            </div>
                        </div>
                        <div className="last_mess">
                            last mess
                        </div>
                        <div className="fix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;