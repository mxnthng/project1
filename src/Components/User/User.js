import React, { Component } from 'react';
import Popup from "reactjs-popup";
import './User.css';

const styles = {
    popups : {
        'width': '360px',
        'height': '35vh',
    }
}

class User extends Component {
    render() {
        return (
            <div>
                <Popup open={this.props.isOpen} closeOnDocumentClick modal contentStyle={styles.popups}>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}> &times; </button>
                            <div className="fix"></div>
                            <div className="avatar">
                                <img alt="avatar" className="img" src={this.props.avatar} />
                                {/* (this.props.avatar=="http://undefined")?"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png":this.props.avatar */}
                            </div>
                            <div className="name"> {this.props.userName} </div>
                            <div className="email"> Email: {this.props.email} </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default User;