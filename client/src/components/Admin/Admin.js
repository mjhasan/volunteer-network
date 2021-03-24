import React from 'react';
import './Admin.css';
import { Row, Col, Tab, Nav, Container } from 'react-bootstrap';
import VolunteerList from '../VolunteerList/VolunteerList';
import AddEvent from '../AddEvent/AddEvent';
import userIcon from '../../img/logos/users.png'
import addIcon from '../../img/logos/plus.png'

const Admin = () => {
    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><img width="20" src={userIcon} alt="user" /> Volunteer register list</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><img width="20" src={addIcon} alt="user" /> Add Event</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <VolunteerList />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <AddEvent />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Admin;