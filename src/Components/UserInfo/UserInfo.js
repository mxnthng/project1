import React, { Component } from 'react';
import axios from 'axios';

export default class UserInfo extends Component {
    componentDidMount() {
        const TOKEN = localStorage.getItem('token');
        // console.log("token" + TOKEN);
        axios({
            method: 'get',
            url: 'http://localhost:3000/user/profile',
            headers: {
                'user-token': TOKEN
            }
        }).then(res => {
            // console.log(res.data);
            // localStorage.removeItem('info');
            localStorage.setItem("info", JSON.stringify(res.data));
        }).catch(err => {
            // console.log(TOKEN);
            console.log(err);
        });
    }
    
    render() {
        return(<> </>);
    }
}