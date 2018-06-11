import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NotFound } from '../components/errors/notfound'
import Navbar from '../components/navbar/navbar';
import User from '../components/user';
import Dashboard from '../components/dashboard';
import Auth from '../components/auth';

import UserSelectors from '../store/user/selectors'

const mapStateToProps = state => ({
  authorized: UserSelectors.getIsAuthorized(state),
  location: state.router.location
})

class App extends Component {
  render() {
    console.log("router", this);
      if (!this.props.authorized){ return (<Auth/>) }
       else {
        return (
          <div>
            {/*<Router>*/}
              <Navbar/>
              <div className="">
                <Switch  location={this.props.location}>
                  <Route exact path='/' component={Dashboard}/>
                  <Route exact path='/account' component={User}/>
                  {/*<Route exact path='/authorization' component={Auth}/>*/}
                  <Route component={NotFound} />
                </Switch>
              </div>
            {/*</Router>*/}
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
