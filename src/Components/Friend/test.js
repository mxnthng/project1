import React, { Component } from 'react';
import Popup from "reactjs-popup";
import './Friend.css';

class Friend extends Component {
    render() {
        return (
            <div>
                <Popup trigger={this.callModal} modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}> &times; </a>
                            <div className="header"> Modal Title </div>
                            <div className="content"> Modal content </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default Friend;