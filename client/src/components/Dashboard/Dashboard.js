import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RegisteredEvents from '../RegisteredEvents/RegisteredEvents';
import './Dashboard.css';
import { userContext } from '../../App';

const Dashboard = () => {
    const [regList, setRegList] = useState();
    const [deleteItem, setDeleteItem] = useState(false)
    const [user, setUser] = useContext(userContext);
    useEffect(() => {
        fetch('http://localhost:4000/registerlist?email=' + user.email)
            .then(res => res.json())
            .then(data => {
                setRegList(data)
            })
    }, [deleteItem ])
    const deleteEvent = (id) => {
        fetch('http://localhost:4000/delete/' + id, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(isDeleted => setDeleteItem({ isDeleted, id }))
    }
    return (
        <div>
            <Container>
                <Row>
                    {regList ? regList.map(regInfo => <RegisteredEvents deleteEvent={deleteEvent} registeredEvents={regInfo}/>) : 'Loading...'}
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;