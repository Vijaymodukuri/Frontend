import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const PrimarySearchAppBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MUI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <FormControl
            type="search"
            placeholder="Search..."
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
          <Nav className="ml-auto">
            <Nav.Link>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <Badge variant="danger" className="ml-1">
                4
              </Badge>
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faBell} size="lg" />
              <Badge variant="danger" className="ml-1">
                17
              </Badge>
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PrimarySearchAppBar;
