import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tweet from './page/tweet/Tweet';
import Login from './page/login/Login';
import Signup from './page/signup/Signup';

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
    );
  }
}

export default Routes;
