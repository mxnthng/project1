import React, { Component } from 'react';
import User from './User';

class CallPopup extends Component {
    render() {
        return (
            <div>
                <User isOpen={true} />
            </div>
        );
    }
}

export default CallPopup;