import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
// import ReactCountriesInput from 'react-countries-input'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddressBook = (props) => {

    // const handleCountryOnChange = country => {

    //    console.log(country)
    //}


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



    return (
        <>
            <Header></Header>

            <h4>ADDRESS BOOK</h4>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit((onSubmit))} style={{
                            textAlign: 'start'
                        }} >
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                <Form.Label column sm={4}>
                                    Your Full Name
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("name")} type="name" placeholder="Enter Your Full Name" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                                <Form.Label column sm={4}>
                                    Address
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("email")} type="text" placeholder="Enter Your Address" required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTownCity">
                                <Form.Label column sm={4}>
                                    Town/City:
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("town/city")} type="text" placeholder="Town/City" required />
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
                                    <Form.Control {...register("telephone")} type="text" placeholder="Telephone " />
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
                                    <Form.Control {...register("phone")} type="text" placeholder="Phone " />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default AddressBook;


    