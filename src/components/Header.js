import React from 'react';
import { Nav, Navbar, Container, Col, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Header.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Col className="header-brand col-md-4">
          <Navbar.Brand as={Link} to="/">
            <Image src="brand.png" style={{ maxWidth: '100px' }} />
          </Navbar.Brand>
        </Col>
        <Col className="header-tab">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about-us" className='mx-5'>VỀ CHÚNG TÔI</Nav.Link>
              <Nav.Link as={Link} to="/products" className='mx-5'>SẢN PHẨM</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        </Container>
    </Navbar>
  );
}