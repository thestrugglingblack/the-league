import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import  Navbar from '../components/navbar/navbar';
class App extends Component {
  render() {
    return (
      <div>
        <Grid width={320}
        gap={24} >
          <Navbar/>
          <div className="">
            <Switch>
              <Route exact path='/' component={}/>
            </Switch>
          </div>
         </Grid>
      </div>
    );
  }
}

export default App;
