import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';

import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import FriendLayout from '../Layout/FriendLayout';
import ChatLayout from '../Layout/ChatLayout';
import ChangeInfo from '../ChangeInfo/ChangeInfo';

class App extends Component {
   render() {
      return (
         <Router>
               <Switch>
                  <Redirect exact from="/" to="/signin" />
                  <Route path="/signin" component={SignIn} exact/>
                  <Route path="/signup" component={SignUp} exact/>
                  <Route path="/friend" component={withRouter(FriendLayout)} exact/>
                  <Route path="/message" component={withRouter(ChatLayout)} exact/>
                  <Route path="/userinfo" component={ChangeInfo} exact/>
                  <Route render={ () => <h1 style={{'textAlign': 'center'}}>Không tìm thấy trang</h1> } />
               </Switch>
         </Router>
      );
   }
}

export default App;
