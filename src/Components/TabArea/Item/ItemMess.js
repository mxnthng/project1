import React, { Component } from 'react';
import './item.css'

class ItemMess extends Component {
    render() {
        return (
            <div className="item">
                <div className="item_inside">
                    <div className="avatar_container">
                        <img alt="avatar" className="avatar" src={this.props.avatar} />
                    </div>
                    <div className="item_content">
                        <div className="name_container">
                            <div className="item_name">
                                {this.props.userName}
                            </div>
                        </div>
                        <div className="last_mess">
                            {/* Do tgian gấp nên hiển thị email thay cho tin nhắn cuối cùng */}
                            {this.props.email}
                        </div>
                        <div className="fix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemMess;