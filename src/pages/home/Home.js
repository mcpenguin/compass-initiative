// React component class for Home section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import insta_logo from './insta_logo.png'

// import stylesheet
import './Home.css';

class NavbarLink extends Component {
    render() {
        const str = `#${this.props.id}`;
        return (
            <Nav.Item>
                <Nav.Link className="navbar-item" href={str}>
                    {this.props.title}
                </Nav.Link>
            </Nav.Item>
        )
    }
}

class MyNavbar extends Component {
    render() {
        return (
            // <div>
                <Navbar expand="lg" variant="light">
                    <Navbar.Brand href="/" className="navbar-brand logo">
                        <img src={insta_logo} style={{
                            width: 50,
                            height: 50
                        }}/>
                    </Navbar.Brand>
                    <Navbar.Brand href="/" className="navbar-brand-text" style={{
                        position: 'relative',
                        left: "-5px",
                        top: "2px",
                        fontSize: "1.5rem"
                    }}>
                        The Compass Initiative
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-navbar" />
                    <Navbar.Collapse>
                        <Nav id="my-navbar" className="ml-auto">
                            <NavbarLink id="about_us" title="About Us" />
                            <NavbarLink id="modules" title="Modules" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            // </div>
        )
    }
}

export default class Home extends Component {
    render() {
        return (
            <>
                <MyNavbar />
                <Container fluid id="initial-section" style={{
                    height: "400px",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    padding: "10% 45px",
                }}>
                    <Row>
                        <Col lg={5}>
                            <p class="initial-section-text">
                                Educating one child at a time
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}