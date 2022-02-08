import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';

const UpdateSingleDetails = ({ update }) => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addressBook', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Address Added Successfully')
                    reset()
                }
            })
    }
    return <div>
        <Col xs={6}>
            <Form onSubmit={handleSubmit((onSubmit))} style={{
                textAlign: 'start'
            }} >
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                    <Form.Label column sm={4}>
                        Your Full Name
                    </Form.Label>
                    <Col sm={8}>
                        {user.displayName && <Form.Control {...register("name")} type="name" defaultValue={user.displayName} required />}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                        Your Email Address
                    </Form.Label>
                    <Col sm={8}>
                        {user.email && <Form.Control {...register("email")} type="text" value={user.email} required />}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalTownCity">
                    <Form.Label column sm={4}>
                        Town/City:
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control {...register("townCity")} type="text" placeholder="Town/City" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                    <Form.Label column sm={4}>
                        Country
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control {...register("country")} type="country" placeholder="Country " required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPostcode">
                    <Form.Label column sm={4}>
                        Postcode
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control {...register("postcode")} type="text" placeholder="Postcode " required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
                    <Form.Label column sm={4}>
                        Telephone:
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control {...register("telephone")} type="text" required placeholder="Telephone " />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalMobile">
                    <Form.Label column sm={4}>
                        Mobile:
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control {...register("phone")} type="text" placeholder="Phone " required />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </Col>
    </div>
};

export default UpdateSingleDetails;
