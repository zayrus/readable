import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import MainList from './MainList'
import Categories from './Categories'
import '../App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="section">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainList} />
            <Route path="/:category" exact component={Categories} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App
