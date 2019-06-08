import React, { Component }               from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login    from './pages/Login';
import Register from './pages/Register';
import Home     from './pages/Home';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}
