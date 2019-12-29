import React, { Component } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import TabArea from '../TabArea/TabArea';
import ChatArea from '../ChatArea/ChatArea';
import ChatAreaMess from '../ChatArea/ChatAreaMess';
import TabAreaMess from '../TabArea/TabAreaMess';

class ChatLayout extends Component {
    render(){
        return (
            <div>
                <MainMenu />
                <TabArea>
                    <TabAreaMess />
                </TabArea>
                <ChatArea>
                    <ChatAreaMess />
                </ChatArea>
            </div>
        );
    }
}

export default ChatLayout;