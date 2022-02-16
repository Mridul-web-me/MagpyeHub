// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Home from '../../Home/Home';
import logo from '../../../img/logo.jpg'


const AddProduct = () => {
    // const { register, handleSubmit, reset } = useForm();
    // const [title, setTitle] = useState('')
    // const [price, setPrice] = useState('')
    // const [productCode, setProductCode] = useState('')
    // const [category, setCategory] = useState('')
    // const [image, setImage] = useState(null)

    // const handleOnSubmit = e => {
    //     e.preventDefault();
    //     if (!image) {
    //         return;
    //     }
    //     else {

    //     }
    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('price', price);
    //     formData.append('image', image);
    //     formData.append('productCode', productCode);
    //     formData.append('category', category);

    //     fetch('https://desolate-spire-57096.herokuapp.com/products', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 alert('Product Added Successfully')
    //                 reset();
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error', error);
    //         })

    // }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://desolate-spire-57096.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully')
                    reset()

                }
            })
    }

    return (
        <>
            <Col xs={4} md={4}>
                <Link to="/home" >
                    <img src={logo} style={{
                        margin: '15px 0'
                    }} alt="" className='img-fluid' width="200px" height="200px" />
                </Link>
            </Col>

            <Container>
                <Row>
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit((onSubmit))} style={{
                            textAlign: 'start'
                        }} >
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                <Form.Label column sm={4}>
                                    Title
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("title")} type="name" placeholder='title' required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                    Price
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("price")} type="text" placeholder='price' required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                    Description
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("description")} type="text" placeholder='Description' required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTownCity">
                                <Form.Label column sm={4}>
                                    category
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("category")} type="text" placeholder="category" required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    img
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("img")} placeholder="img " type="text" />

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    img1
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("img1")} placeholder="img1" type="text" />

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    img2
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("img2")} placeholder="img2" type="text" />

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    img3
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("img3")} placeholder="img3" type="text" />

                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCountry">
                                <Form.Label column sm={4}>
                                    Product Update
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control {...register("ProductUpdate")} placeholder="Product Update" type="text" />

                                </Col>
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <p>

            </p>
        </>

    )
}

export default AddProduct
