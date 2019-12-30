import React, { Component } from 'react';
import axios from 'axios';
import ItemFriend from './ItemFriend';

let TOKEN = localStorage.getItem('token');

class ListFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/friend/friendList',
            headers: {
                'user-token': TOKEN
            }
        }).then(res => {
            console.log("Friend res: " + res.data);
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
                {this.state.friends.map((item,index) =>
                    <div key={index}>
                        <ItemFriend avatar={item.avatar} userName={item.userName} email={item.email} />
                    </div>
                )}
                <div>
                        <ItemFriend avatar="#" userName="Test friend" email="test friend" />
                    </div>
            </div>
        );
    }
}

export default ListFriend;