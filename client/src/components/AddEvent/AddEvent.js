import React, { useState } from 'react';
import './AddEvent.css';
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';
import uploadIcon from '../../img/logos/cloud.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://arcane-garden-35013.herokuapp.com/addEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => data && alert('Successfully created new event!'))
    }

    return (
        <div>
            <form className="add-container" onSubmit={handleSubmit(onSubmit)}>
                <Row className="form-row">
                    <Col xs={6}>
                        <h6>Event Title</h6>
                        <input name="name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </Col>
                    <Col xs={6}>
                        <h6>Event Date</h6>
                        <DatePicker dateFormat="MMMM d, yyyy" selected={startDate} onChange={date => setStartDate(date)} />

                    </Col>

                    <Col xs={6}>
                        <h6>Description</h6>
                        <textarea className="input-description" name="description" ref={register({ required: true })} />
                        {errors.description && <span>This field is required</span>}
                    </Col>
                    <Col xs={6}>
                        <h6>Banner</h6>
                        <button><img width={20} src={uploadIcon} alt="uploadIcon" /> Upload Image</button>
                    </Col>
                </Row>

                <div className="submit primary"><input type="submit" /></div>
            </form>
        </div>
    );
};

export default AddEvent;