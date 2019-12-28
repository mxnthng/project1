import React, { Component } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import TabAreaFriend from '../TabArea/TabAreaFriend';
import ChatArea from '../ChatArea/ChatArea';
import ChatAreaFriend from '../ChatArea/ChatAreaFriend';
import TabArea from '../TabArea/TabArea';

class FriendLayout extends Component {
    render() {
        return (
            <div>
                <MainMenu />
                <TabArea>
                    <TabAreaFriend />
                </TabArea>
                <ChatArea>
                    <ChatAreaFriend />
                </ChatArea>
            </div>
        );
    }
}

export default FriendLayout;