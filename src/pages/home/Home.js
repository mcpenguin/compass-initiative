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

// import stylesheet
import './Home.css';

class NavbarLink extends Component {
    render() {
        const str = `#${this.props.id}`;
        return (
            <Nav.Item>
                <Nav.Link className="nav-item" href={str}>
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
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand href="/" className="navbar-brand">The Arctic Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-navbar" />
                    <Navbar.Collapse>
                        <Nav id="my-navbar" className="ml-auto">
                            <NavbarLink id="about-me" title="About Me" />
                            <NavbarLink id="timeline" title="Timeline" />
                            <NavbarLink id="notes" title="Notes" />
                            <NavbarLink id="contact-me" title="Contact Me" />
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
            </>
        );
    }
}