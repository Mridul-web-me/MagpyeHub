// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../../Header/Header';
import Home from '../../Home/Home';

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

    //     fetch('http://localhost:5000/products', {
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
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully')
                    reset()

                }
            })
    }

    return (
        <>
            <Header></Header>
            {/* <form onSubmit={handleSubmit((handleOnSubmit))}>
                <Header></Header> <br /> <br /> <br />
                <input
                    {...register("title")}
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)} />
                <br /> <br />
                <input
                    {...register("price")}
                    placeholder="Price"
                    onChange={e => setPrice(e.target.value)} />
                <br /> <br />
                <input
                    {...register("img")}
                    placeholder="Image"
                    onChange={e => setImage(e.target.files[0])}
                    type="file"
                    name='file'
                    multiple
                    accept='image/*' />
                <br /> <br />
                <input
                    {...register("productCode")}
                    placeholder="Product Code"
                    onChange={e => setProductCode(e.target.value)} />
                <br /> <br />
                <input
                    autocomplete="off"
                    {...register("category")}
                    placeholder="Category"
                    onChange={e => setCategory(e.target.value)} />
                <br /> <br />
                <input type="submit" />
            </form> */}
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


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default AddProduct
