import React, { useEffect, useState } from 'react';
import './VolunteerList.css';
import Table from 'react-bootstrap/Table'
import deleteIcon from '../../img/logos/trash.png'
import Moment from 'react-moment';

const VolunteerList = () => {
    const [volunteer, setVolunteer] = useState();
    useEffect(() => {
        fetch('https://arcane-garden-35013.herokuapp.com/allRegisterList')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [volunteer])

    const trashEvent = (id) => {
        fetch('https://arcane-garden-35013.herokuapp.com/trash/' + id, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(isDeleted => console.log(isDeleted))
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Registration Date</th>
                    <th>Event Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {volunteer && volunteer.map(data => {
                    return <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td><Moment format="D MMM YYYY">{data.date}</Moment></td>
                        <td>{data.events}</td>
                        <td><span onClick={() => trashEvent(data._id)}><img src={deleteIcon} alt="trash" width={20} /></span></td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
};

export default VolunteerList;