import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

class NavigationBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar id="nav-bar" bg="dark" variant="dark" expand="lg" fixed="top" className="border-bottom border-success">
          <Navbar.Brand href="#home" onClick = {this.props.handleChangeToHome}>ngoDONOR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Official Website" onClick = {this.props.handleChangeToRegister}>Register</Nav.Link>
              <Nav.Link href="#contact" onClick = {this.props.handleChangeToSearch}>Category</Nav.Link>
              <Nav.Link href="#login" onClick = {this.props.handleChangeToLogin}>Login</Nav.Link>
            </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" onClick = {this.props.handleChangeToSearch}>Search</Button>
          </Form>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default NavigationBar
