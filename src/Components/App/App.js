import React from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import TabArena from '../TabArea/TabArena';
import ChatArea from '../ChatArea/ChatArea';
import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import Test from '../Menu/Test'

function App() {
    return (
      <div>
        <Menu />
        <TabArena />
        <ChatArea />
      </div>
  );
}

export default App;
