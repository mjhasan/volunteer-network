import React from 'react';
import './Home.css';
import { FormControl, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { eventName } from '../../fakeData';
import img from '../../img/images/clothSwap.png'
import Events from '../Events/Events';

const Home = () => {
    const eventsList = eventName;
    console.log(eventsList);
    console.log(require(`../../img/images/animalShelter.png`))
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
                    {eventsList.map(ev => <Events events={ev}></Events>)}
                </Row>
            </Container>
        </div>
    );
};

export default Home;