import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import routes from '../../Routes/routes';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                     <Route path="/" exact component={SignIn} />
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

   showContent = (routes) => {
      var result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               />
            );
         });
      }
      return result;
   }
}

export default App;
