import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { connect } from 'react-redux';

import { userSigningIn } from '../../store/user/actions'

const mapDispatchToProps = {
  userSigningIn
}

class Auth extends Component {

  static propTypes = forbidExtraProps({
    userSigningIn: PropTypes.func.isRequired
  });

  onSignIn = () => {
    this.props.userSigningIn()
  }
  render() {
    return (
      <div>
        <h2> Signin</h2>
        <button
          onClick={this.onSignIn}
          >Click SignIn </button>
        <h2>Signup </h2>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Auth);
