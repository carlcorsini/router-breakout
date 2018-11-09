import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'
import Cats from './Components/Cats'
import Dogs from './Components/Dogs'
import Home from './Components/Home'
import TopNav from './Components/TopNav'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/*" component={TopNav} />
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cats" component={Cats} />
          <Route exact path="/dogs" component={Dogs} />
        </div>
      </Router>
    )
  }
}

export default App
