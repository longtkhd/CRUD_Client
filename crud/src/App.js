import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import history from './history';
// import Header from './components/Header.components';
import NotFound from './components/NotFound.components';
import User from './components/Users.components';
import SignIn from './components/SignIn.component';
import PrivateRoute from './components/PrivateRouter';
import Dashboard from './components/Dashboard.component';

function App() {
  return (
    <div className="App">
    
        <Router history={history}>
          <div>
            {/* <Header></Header> */}
            <Switch>
            <Route path="/login" exact component={SignIn} />             
            <PrivateRoute path="/admin"
              component={User}
              layout={Dashboard}
            />

            <Route path="**" exact component={NotFound} />

            
              
            </Switch>
          </div>
        </Router>
    
    </div>
  );
}

export default App;
