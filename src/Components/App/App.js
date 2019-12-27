import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import MainMenu from '../MainMenu/MainMenu';
import TabArea from '../TabArea/TabArea';
import ChatArea from '../ChatArea/ChatArea';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Redirect exact from="/" to="/signin" />
                  <Route path="/signin" exact component={SignIn} />
                  <Route path="/signup" exact component={SignUp} />
                  <Route path="/home" render={props =>
                     <div>
                        <MainMenu />
                        <TabArea />
                        <ChatArea />
                     </div>
                  } />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
