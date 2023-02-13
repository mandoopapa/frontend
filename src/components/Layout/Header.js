import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Connect } from '../Connect';

const Header = () => {
  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>BonMedia - Web3</Navbar.Brand>
            <Nav className="ml-auto">
              <Connect />
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;