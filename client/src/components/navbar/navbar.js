import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <div className="logo">
            <Link to="/dashboard"><h1>DigiPay</h1></Link>
          </div>
          <ul>
            <li>
              <Link to="/reports">Reports</Link>

            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
