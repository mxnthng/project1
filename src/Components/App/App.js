import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import FriendLayout from '../Layout/FriendLayout';
import ChatLayout from '../Layout/ChatLayout';
import MainMenu from '../MainMenu/MainMenu';
import ChatArea from '../ChatArea/ChatArea';
import TabArea from '../TabArea/TabArea';

class App extends Component {
   render() {
      return (
         <Router>
               <Switch>
                  <Redirect exact from="/" to="/signin" />
                  <Route path="/signin" component={SignIn} exact/>
                  <Route path="/signup" component={SignUp} exact/>
                  <Route path="/friend" component={FriendLayout} exact/>
                  <Route path="/message" component={ChatLayout} exact/>
                  <Route render={ () => <h1 style={{'textAlign': 'center'}}>Không tìm thấy trang</h1> } /> 
               </Switch>
         </Router>
      );
   }
}

export default App;
