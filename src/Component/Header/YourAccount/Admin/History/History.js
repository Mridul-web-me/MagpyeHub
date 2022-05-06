import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const History = ({ orders }) => {
    const { _id, fullName, email } = orders
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [order, setOrder] = useState([]);

    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updatedStatus = { status: updateStatus };
        setOrder(updatedStatus)
    }
    const handleUpdateStatus = e => {
        const url = `http://localhost:5000/orders/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    setOrder({});
                }
            });


        e.preventDefault();
    }

    const handleDelete = _id => {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert('Successfully Deleted')
                    const remaining = order.filter(orders => orders._id !== _id);
                    setOrder(remaining);
                }
            })
    }


    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h4>Name: {fullName}</h4>
                <h4>Email: {email}</h4>
                <div>
                    <Button onClick={() => handleDelete(orders._id)} variant='danger'>Delete Order</Button>
                    <Button onClick={handleShow}>Update Order Status</Button></div>
            </div>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Status
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdateStatus}>
                        <input onChange={handleStatusChange} type="text" value={order.status || ""} />
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

export default History