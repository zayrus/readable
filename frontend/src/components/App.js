import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainList from './MainList'
import Categories from './Categories'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Post from './Post'
import NotFound from './NotFound'
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
            <Route path="/new-post" component={NewPost} />
            <Route path="/:category" exact component={Categories} />
            <Route path="/:category/:post_id" exact component={Post} />
            <Route path="/:category/:post_id/edit" component={EditPost} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
