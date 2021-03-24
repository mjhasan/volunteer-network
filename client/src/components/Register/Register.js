import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './Register.css';
import { Col, Container, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userContext } from '../../App';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useContext(userContext);
    const [startDate, setStartDate] = useState('');
    const [serverResponse, setServerResponse] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const regData = { date: startDate, ...data }
        console.log(regData);
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(regData)
        })
            .then(res => res.json())
            .then(data => setServerResponse(data))
    }
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="reg-box">
                    {serverResponse && <Redirect to="/dashboard" />}
                    <h4>Register as a Volunteer</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={user.displayName} placeholder="Full Name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                        <input name="email" defaultValue={user.email} placeholder="Username or Email" ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <DatePicker placeholderText="Date" dateFormat="MMMM d, yyyy" selected={startDate} onChange={date => setStartDate(date)} />
                        <input name="description" placeholder="Description" ref={register} />
                        <input name="events" defaultValue={user.eventsName} placeholder="Events Name" ref={register({ required: true })} />
                        {errors.events && <span>This field is required</span>}
                        <input value="Registration" type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;