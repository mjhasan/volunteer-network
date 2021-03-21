import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Events.css';

const Events = (props) => {
    const events = props.events;
    const colorShuffle = [{ backgroundColor: '#FFBD3E' }, { backgroundColor: '#FF7044' }, { backgroundColor: '#421FCF' }, { backgroundColor: '#3F90FC' }]
    const randomNumber = Math.floor(Math.random() * 5);
    return (
        <Col xs={3}>
            <Card>
                <Card.Img variant="top" src={require(`../../img/images/${events.img}`).default} />
                <Card.Body style={colorShuffle[randomNumber]}>
                    <Card.Text>
                        {events.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Events;