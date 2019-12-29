import React, { Component } from 'react';
import Popup from "reactjs-popup";
import './User.css';

const styles = {
    popups : {
        'width': '360px',
        'height': '50vh',
    }
}

class User extends Component {
    render() {
        return (
            <div>
                <Popup open={this.props.isOpen} closeOnDocumentClick modal contentStyle={styles.popups}>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}> &times; </a>
                            <div className="fix"></div>
                            <div className="avatar" href="#" />
                            <div className="name"> Lung Thị Linh </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default User;