import React, { Component } from 'react';
import axios from 'axios';
import ItemRequest from './ItemRequest';


class ListRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
    }

    componentDidMount() {
        let TOKEN = localStorage.getItem('token');
        axios({
            method: 'get',
            url: 'http://localhost:3000/friend/receiverRq',
            headers: {
                'user-token': TOKEN
            }
        }).then(res => {
            // console.log(res.data);
            this.setState({requests: res.data})
            // console.log(this.state.requests);
        }).catch(err => {
            alert("Có lỗi xảy ra, vui lòng refresh trang");
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                {this.state.requests.map((item, index) => 
                    <ItemRequest key={index} avatar={"http://"+item.avatar} userName={item.userName} email={item.email} _id={item._id} />
                )}
            </div>
        );
    }
}

export default ListRequest;