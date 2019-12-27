import React, { Component } from 'react';
import './item.css'

class ItemMess extends Component {
    render() {
        return (
            <div className="item">
                <div className="item_inside">
                    <div className="avatar_container">
                        <div className="avatar">
                            {this.props.itemAvatar}
                        </div>
                    </div>
                    <div className="item_content">
                        <div className="name_container">
                            <div className="item_name">
                                {this.props.itemName}
                            </div>
                        </div>
                        <div className="last_mess">
                            {this.props.lastMess}
                        </div>
                        <div className="fix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemMess;