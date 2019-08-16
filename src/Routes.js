import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Tweet from './Tweet'
import Login from './Login';
import Signup from './Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Tweet} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;