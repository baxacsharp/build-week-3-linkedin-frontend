import React, { Component } from 'react';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsFeed from 'components/Pages/NewsFeed';
import TempNavBar from 'components/shared/TempNavBar';

import Footer from './components/shared/Footer';

// import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <TempNavBar />
        {/* <NavBar /> */}
        <Switch>
          <Route path='/' exact component={NewsFeed} />
          <Route path='/profile/:id' component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
