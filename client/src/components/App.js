import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { NotFound } from '../components/errors/notfound'
import Navbar from '../components/navbar/navbar';
import User from '../components/user';
import Dashboard from '../components/dashboard';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <div className="">
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/user' component={User}/>
              <Route component={NotFound} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
