import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import Header from '../../../Header';


const UpdateDetails = () => {
    const { user } = useAuth();
    const profileId = useParams()
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/users?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setProfile(data.data)
                setLoading(false)
            })
    }, [user.email])

    const handleNameUpdate = e => {
        const updatedName = e.target.value
        const updatedAddressBook = [{ name: updatedName, email: user.email }];
        setProfile(updatedAddressBook);
    }

    const handleUpdateDetails = e => {
        const url = `http://localhost:5000/users/${profileId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => console.log(data))


        e.preventDefault()
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {
                        profile.map(update => <div>
                            <Col xs={6}>
                                <Form onSubmit={handleUpdateDetails} style={{
                                    textAlign: 'start'
                                }} >
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                        <Form.Label column sm={4}>
                                            Your Full Name
                                        </Form.Label>
                                        <Col sm={8}>
                                            {user.displayName && <Form.Control onChange={handleNameUpdate} type="name" defaultValue={user.displayName} required />}
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={4}>
                                            Your Email Address
                                        </Form.Label>
                                        <Col sm={8}>
                                            {update.email && <Form.Control type="text" value={user.email} required />}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalTownCity">
                                        <Form.Label column sm={4}>
                                            Town/City:
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" placeholder="Town/City" required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                        <Form.Label column sm={4}>
                                            Country
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="country" placeholder="Country " required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPostcode">
                                        <Form.Label column sm={4}>
                                            Postcode
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" placeholder="Postcode " required />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
                                        <Form.Label column sm={4}>
                                            Telephone:
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" required placeholder="Telephone " />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalMobile">
                                        <Form.Label column sm={4}>
                                            Mobile:
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" placeholder="Phone " required />
                                        </Col>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" disabled>
                                        Update
                                    </Button>
                                </Form>
                            </Col>
                        </div>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
};

export default UpdateDetails;
