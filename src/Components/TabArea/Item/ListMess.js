import React, { Component } from 'react';
import axios from 'axios';
import ItemMess from './ItemMess';


class ListMess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        let TOKEN = localStorage.getItem('token');
        axios({
            method: 'get',
            url: 'http://localhost:3000/friend/friendList',
            headers: {
                'user-token': TOKEN
            }
        }).then(res => {
            // console.log(res.data);
            this.setState({friends: res.data})
            // console.log(this.state.friends);
        }).catch(err => {
            alert("Có lỗi xảy ra, vui lòng refresh trang");
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                {this.state.friends.map((item, index) => 
                    <ItemMess key={index} avatar={"http://"+item.avatar} userName={item.userName} email={item.email} />
                )}
            </div>
        );
    }
}

export default ListMess;