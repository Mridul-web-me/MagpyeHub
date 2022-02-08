import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
// import singleDetails from '../singleDetails/singleDetails';

const MyDetails = () => {
    const [address, setAddress] = useState([])

    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://immense-spire-59977.herokuapp.com/addressBook?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAddress(data))
    }, [])
    return (<div>
        <Header></Header>
        <div>
            <Row style={{
                margin: '50px 0'
            }}>
                <Col xs={6}>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="4">
                                Your Name
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type='text' readOnly defaultValue={user.displayName} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Email
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" readOnly defaultValue={user.email} />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Link to='/updateDetails'>
                        <Button>Update Details</Button>
                    </Link>
                </Col>
            </Row>
        </div>
        <Footer></Footer>

    </div>)
};

export default MyDetails;
