import logo from '../../img/logos/logo.png';
import React from 'react';
import { Nav, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Container className="header">
                <Row>
                    <Col xs={3}>
                        <img width={200} src={logo} alt="Volunteer network" />
                    </Col>
                    <Col>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/donation">Donation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/events">Events</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="register-link" href="/blog">Register</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="admin-link" href="/blog">Admin</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;