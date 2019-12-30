import React, { Component } from 'react';
import axios from 'axios';
import ItemRequest from './ItemRequest';

let TOKEN = localStorage.getItem('token');

class ListRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/friend/receiverRq',
            headers: {
                'user-token': TOKEN
            }
        }).then(res => {
            console.log(res.data);
            this.setState({requests: res.data})
            console.log(this.state.requests);
        }).catch(err => {
            alert("Có lỗi xảy ra, vui lòng refresh trang");
            console.log(err);
        });
    }

    mappingReq = () => {
        const results = this.state.requests.map((item, key) => {
            return(<ItemRequest key={key} avatar={item.avatar} userName={item.userName} email={item.email} />);
        });
        return results;
    }

    render() {
        return (
            <div>
                {this.mappingReq}
                <div>
                    <ItemRequest avatar="#" userName="Test req" email="test req" />
                </div>
            </div>
        );
    }
}

export default ListRequest;