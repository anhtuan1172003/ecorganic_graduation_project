import React from 'react';
import { Nav, Navbar, Container, Col, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Header.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Col className="header-brand col-md-4">
          <Navbar.Brand as={Link} to="/home">
            <Image src="brand.png" style={{ maxWidth: '100px' }} />
          </Navbar.Brand>
        </Col>
        <Col className="header-tab">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/schedule">VỀ CHÚNG TÔI</Nav.Link>
              <Nav.Link href="#sales">SẢN PHẨM</Nav.Link>
              <NavDropdown title="SẢM PHẨM" id="basic-nav-dropdown" class="dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
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