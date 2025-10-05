import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';

const mainPage = "HOME";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
          className="shadow-sm"
        >
          <Container>
            {/* Brand / Logo */}
            <NavbarBrand>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h2 className="text-primary mb-0">{mainPage}</h2>
              </Link>
            </NavbarBrand>

            {/* Toggle for mobile view */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                {/* Authentication buttons */}
                <AuthOptions />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
