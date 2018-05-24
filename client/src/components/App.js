import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { NotFound } from '../components/errors/notfound'
import Navbar from '../components/navbar/navbar';
import User from '../components/user';
import Dashboard from '../components/dashboard';
import Auth from '../components/auth';


class App extends Component {
  const mapStateToProps = state => ({
    authorized: false
  })
  render() {
    return (

      if(!this.state.authorized === false){ return ( <Auth/>)}
      <div>
          <Navbar/>
          <div className="">
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/user' component={User}/>
              <Route exact path='/authorization' component={Auth}/>
              <Route component={NotFound} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
