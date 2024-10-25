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
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/schedule">VỀ CHÚNG TÔI</Nav.Link>
              <Nav.Link as={Link} to="/products">SẢN PHẨM</Nav.Link>
              <Nav.Link as={Link} to="/authentication">DỊCH VỤ</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
              <Nav.Link as={Link} to="/userprofile">BÁN SỈ</Nav.Link>
              <Nav.Link as={Link} to="/userprofile">LIÊN HỆ</Nav.Link>
              <Nav.Link as={Link} to="/cart"><i class="bi bi-cart-fill" style={{ fontSize: '18px' }}></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        </Container>
    </Navbar>
  );
}