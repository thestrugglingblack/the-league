import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NotFound } from '../components/errors/notfound'
import Navbar from '../components/navbar/navbar';
import User from '../components/user';
import Dashboard from '../components/dashboard';
import Auth from '../components/auth';

import UserSelectors from '../store/user/selectors'

const mapStateToProps = state => ({
  authorized: UserSelectors.getIsAuthorized(state)
})

class App extends Component {
  render() {
    console.log("Props", this);
      if (!this.props.authorized){ return (<Auth/>) }
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

App.propTypes = {
  authorized: PropTypes.bool.isRequired
};

App = connect(mapStateToProps, null)(App);

export default App;
