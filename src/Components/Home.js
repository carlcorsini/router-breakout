import React, { Component } from 'react'

import Cats from './Cats'
import Dogs from './Dogs'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Cats />
        <Dogs />
      </div>
    )
  }
}

export default Home
