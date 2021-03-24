import logo from '../../img/logos/logo.png';
import React from 'react';
import { Nav, Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
const Header = () => {

    // Dynamic CSS arguments
    const dynamicDisplay = { display: 'none' }
    const dynamicAlignment = { margin: '0 auto' }
    const blankCss = { color: 'black' }
    const location = useLocation();
    return (
        <div>
            <Container className="header">
                <Row>
                    <Col style={location.pathname === '/login' || location.pathname === '/register' ? dynamicAlignment : blankCss} xs={3}>
                        <Link to="/"><img width={200} src={logo} alt="Volunteer network" /></Link>
                    </Col>
                    <Col style={location.pathname == '/login' || location.pathname === '/register' ? dynamicDisplay : blankCss}>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Link className="nav-link" to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Donation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Events</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="register-link nav-link" to="/register">Register</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="admin-link nav-link" to="/admin">Admin</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;