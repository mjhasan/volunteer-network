import React, { useEffect, useState } from 'react';
import './Home.css';
import { FormControl, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import Events from '../Events/Events';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://arcane-garden-35013.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <Container>
                <div className="search-section">
                    <h3 className="text-center font-weight-bold">I GROW BY HELPING PEOPLE IN NEED.</h3>
                    <InputGroup className="search-form">
                        <FormControl
                            placeholder="Search...."
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <Row>
                    {events?.map(ev => <Events key={ev._id} events={ev}></Events>)}
                </Row>
            </Container>
        </div>
    );
};

export default Home;