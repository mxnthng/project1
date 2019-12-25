import React, { Component } from 'react';
import UserAvatar from './TopMenu/UserAvatar/UserAvatar';
import MessengerMenu from './TopMenu/MessengerMenu/MessengerMenu';
import FriendMenu from './TopMenu/FriendMenu/FriendMenu';
import SettingMenu from './BottomMenu/SettingMenu/SettingMenu';
import NightMode from './BottomMenu/NightMode/NightMode';

const styles = {
    root: {
        'display': 'inline-block',
        'position': 'relative',
        'width': 66,
        'height': '100vh',
        'background': 'linear-gradient(45deg, #26a69a 30%, #56B4D3 90%)',
        'border': 0,
        'borderRadius': 1,
        'boxShadow': '0 2px 3px 2px #009688',
    },
    top: {
        'display': 'inline-block',
    },
    clearfix: {
        'display': 'inline-block',
        'height' : 20,
    },
    bot: {
        'display': 'block',
        'position': 'absolute',
        'bottom': 0,
    },
};

class Test extends Component {
    render() {
        return (
            <div style={styles.root}>
                
                <div style={styles.top}>
                    <div style={styles.clearfix} />
                    
                    <UserAvatar />
        
                    <div style={styles.clearfix} />
        
                    <div style={styles.clearfix} />
        
                    <div style={styles.clearfix} />
        
                    <MessengerMenu />
        
                    <div style={styles.clearfix} />
        
                    <FriendMenu />
        
                </div>
        
                <div style={styles.bot}>
        
                    <SettingMenu />
        
                    <NightMode />
        
                </div>
        
            </div>
          );
    }
}

export default Test;