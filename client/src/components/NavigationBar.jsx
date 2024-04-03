import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#leltarak">Leltárak</Nav.Link>
            <Nav.Link href="#gyujtemenyek">Gyűjtemények</Nav.Link>
            <Nav.Link href="#szotarak">Szótárak</Nav.Link>
          </Nav>
          <Form className="d-flex flex-column flex-lg-row align-items-center">
            <Form.Control
              type="search"
              placeholder="Bármi vagy akármi"
              className="me-lg-2 mb-2 mb-lg-0"
              aria-label="Search"
            />
            <NavDropdown title="Mindenben" id="navbarScrollingDropdown" className="me-lg-2 text-white">
              <NavDropdown.Item href="#prefix">prefix szerint</NavDropdown.Item>
              <NavDropdown.Item href="#tipus">típus szerint</NavDropdown.Item>
              <NavDropdown.Item href="#formatum">formátum szerint</NavDropdown.Item>
              <NavDropdown.Item href="#datum">dátum szerint</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-success">Keresés</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;