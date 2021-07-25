import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Church
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#give">Give</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header