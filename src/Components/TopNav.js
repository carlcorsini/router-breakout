import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { Route } from 'react-router-dom'

export default class Example extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Cats & Dogs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Route
                path="/*"
                component={() => (
                  <NavItem>
                    <NavLink href="/" className="nav-link">
                      Home
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/dogs"
                component={() => (
                  <NavItem>
                    <NavLink href="/cats" className="nav-link">
                      Cats
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/cats"
                component={() => (
                  <NavItem>
                    <NavLink href="/dogs" className="nav-link">
                      Dogs
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/home"
                component={() => (
                  <NavItem>
                    <NavLink href="/dogs" className="nav-link">
                      Dogs
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/home"
                component={() => (
                  <NavItem>
                    <NavLink href="/cats" className="nav-link">
                      Cats
                    </NavLink>
                  </NavItem>
                )}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
