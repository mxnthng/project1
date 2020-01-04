import React, { Component } from 'react';
import UserInfo from './UserInfo';
import { Redirect } from 'react-router-dom';

class RedirectPage extends Component {
    render() {
        return (
            <did>
                <UserInfo />
                <Redirect to="/message" />;
            </did>
        );
    }
}

export default RedirectPage;