import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './RegisteredEvents.css';
import eventImg from '../../img/images/extraVolunteer.png'
import Moment from 'react-moment';

const RegisteredEvents = (props) => {
    const { events, date, _id } = props.registeredEvents;
    return (
        <Col xs={12} sm={6}>
            <Row className="eventCard">
                <Col xs={5}>
                    <img src={eventImg} alt={events} width="100%" />
                </Col>
                <Col xs={7}>
                    <h4>{events}</h4>
                    <h6><Moment format="D MMM YYYY">{date}</Moment></h6>
                    <button onClick={() => props.deleteEvent(_id)}>Cancel</button>
                </Col>
            </Row>
        </Col>
    );
};

export default RegisteredEvents;