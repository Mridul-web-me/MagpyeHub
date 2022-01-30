
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';


const SingleDetails = (props) => {
    const { user } = useAuth()
    console.log(props.details);
    const { name, phone } = props.details
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/addressBook', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Address Added Successfully')

                }
            })
    }

    return (<div>

        <Container>
            <Row>
                <Col xs={6}>
                    <Form style={{
                        textAlign: 'start'
                    }} >


                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                            <Form.Label column sm={4}>
                                Address
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text" value={user.email} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMobile">
                            <Form.Label column sm={4}>
                                Mobile:
                            </Form.Label>
                            <Col sm={8}>
                                {/* <ReactCountriesInput onChange={handleCountryOnChange}

                                        flagStyle={{
                                            '&img': {
                                                width: 30,
                                                height: 15
                                            }
                                        }}
                                        selectStyle={{
                                            // width: '150%'
                                        }}
                                        input inputStyle={{
                                            border: "1px solid #9999",
                                            width: '300px',
                                            height: '35px'
                                        }}
                                        containerStyle={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}

                                    /> */}
                                <Form.Control type="text" value={phone} />
                            </Col>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">
                            Update My Details
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>)
};

export default SingleDetails;
