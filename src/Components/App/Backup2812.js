import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import MainMenu from '../MainMenu/MainMenu';
import TabArea from '../TabArea/TabArea';
import ChatArea from '../ChatArea/ChatArea';
import TabAreaFriend from '../TabArea/TabAreaFriend';
import TabAreaMess from '../TabArea/TabAreaMess';
import LayoutTabArea from '../Layout/';

class App extends Component {
   render() {
      return (
         <Router>
               <Switch>
                  <Redirect exact from="/" to="/signin" />
                  <Route path="/signin" exact component={SignIn} />
                  <Route path="/signup" exact component={SignUp} />
                  <Route path="/home" render={props =>
                        <div>
                           <MainMenu />
                           <TabArea>
                              <Switch>
                                 <Route path="/home/friend" component={TabAreaFriend} />
                                 <Route path="/home/messenge" component={TabAreaMess} />
                              </Switch>
                           </TabArea>
                           <ChatArea />
                        </div>
                     } />
                  
                  <Route path="home" component={ChatArea} />
               </Switch>
         </Router>
      );
   }
}

export default App;
