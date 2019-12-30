import React, { Component } from 'react';
import axios from 'axios';

const TOKEN = localStorage.getItem('token');

export default class UserInfo extends Component {
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/user/profile',
            headers: {
                'user-token': TOKEN
            }
        }).then(res => {
            // console.log(res.data);
            localStorage.removeItem('info');
            localStorage.setItem("info", JSON.stringify(res.data));
            
        }).catch(err => {
            // console.log(TOKEN);
            alert("Có lỗi xảy ra, vui lòng refresh trang");
            console.log(err);
        });
    }
    
    render() {
        return(<> </>);
    }
}