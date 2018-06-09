import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { NotFound } from '../components/errors/notfound'
import Navbar from '../components/navbar/navbar';
import User from '../components/user';
import Dashboard from '../components/dashboard';
import Auth from '../components/auth';

const mapStateToProps = state => ({
  authorized: true
})

class App extends Component {
  render() {
    console.log("Props", this.props);
      if (this.props.authorized){ return (<Auth/>) }
       else {
        return (
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
}


export default App;
