import React, {Component} from 'react'
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap'

class Menu extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Buffet-Shabu-Grill</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/promotion">Promotion</NavItem>
            <NavItem eventKey={3} href="/calculate">Calculate Expense</NavItem>
            <NavItem eventKey={4} href="/contact">Contact Us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Menu
