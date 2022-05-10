import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const UpdatePhone = ({ update }) => {
    const { _id, phone } = update
    console.log(_id)
    const { user } = useAuth()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [users, setUsers] = useState({});

    const handlePhoneChange = e => {
        const updatePhone = e.target.value;
        const updatedPhone = { phone: updatePhone };
        setUsers(updatedPhone)
    }
    const handleCountryChange = e => {
        const updateCountry = e.target.value;
        const updatedCountry = { country: updateCountry };
        setUsers(updatedCountry)
    }
    const handleUpdatePrice = e => {
        const url = `http://localhost:5000/users/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    setUsers();
                }
            });


        e.preventDefault();
    }

    return (
        <div>
            <Button onClick={handleShow}>Update Phone</Button>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Phone <br />
                        Name: {user.displayName} <br />
                        Phone: {phone} <br />
                        id: {_id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdatePrice}>
                        <input onChange={handlePhoneChange} type="text" placeholder='Phone' />
                        <input onChange={handleCountryChange} type="text" placeholder='Country' />
                        <input type="submit" value='Update' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdatePhone