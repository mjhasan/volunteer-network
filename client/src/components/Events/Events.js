import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Events.css';
import { userContext } from '../../App';

const Events = (props) => {
    const events = props.events;
    const colorShuffle = [{ backgroundColor: '#FFBD3E' }, { backgroundColor: '#FF7044' }, { backgroundColor: '#421FCF' }, { backgroundColor: '#3F90FC' }]
    const randomNumber = Math.floor(Math.random() * 5);
    const [user, setUser] = useContext(userContext);
    const handleEvents = (data) => {
        setUser({ eventsName: data })
    }
    return (
        <Col xs={6} md={3}>
            <Link onClick={() => handleEvents(events.name)} to="/register">
                <Card>
                    <Card.Img variant="top" src={require(`../../img/images/${events.img ? events.img : 'noPhoto.jpg'}`).default} />
                    <Card.Body style={colorShuffle[randomNumber]}>
                        <Card.Text>
                            {events.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Events;