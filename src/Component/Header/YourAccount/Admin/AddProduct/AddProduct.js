// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../../../Header';
import Home from '../../../../Home/Home';
import logo from '../../../../../img/logo.jpg'
import toast from 'react-hot-toast';
import useAuth from '../../../../../hooks/useAuth';


const AddProduct = () => {

    const { user } = useAuth()


    // let imageURL = [];
    // if (data.img) {
    //     const imageData = new FormData();
    //     imageData.set('key', 'acb2d4c7a68ef1bf06d396d73adb600a')
    //     // imageData.append('image', data.img[0]);
    //     for (let i = 0; i < data.img.length; i++) {
    //         imageData.append(image, data.img[i])

    //         try {
    //             const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
    //             console.log(res)
    //             imageURL = [...imageURL, res.data.data.display_url];
    //             toast.dismiss(loading);
    //         } catch (error) {
    //             toast.dismiss(loading);
    //             return toast.error('Failed to upload the image!');
    //         }
    //     }
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



    const onSubmit = async data => {
        console.log('img', data);
        if (!data.img) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!')
        // let imageURL1 = "";
        console.log(data);
        let imageURL = [];
        if (data.img) {
            const imageData = new FormData();
            imageData.set('key', '9c07b6c871adb28ca7da16c40d393954')
            // imageData.append('image', data.img[0]);
            for (let i = 0; i < data.img.length; i++) {
                imageData.append('image', data.img[i])

                try {
                    const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
                    console.log(res)
                    imageURL = [...imageURL, res.data.data.display_url];
                    toast.dismiss(loading);
                } catch (error) {
                    toast.dismiss(loading);
                    return toast.error('Failed to upload the image!');
                }
            }
            const blogInfo = {
                title: data.title,
                description: data.description,
                category: data.category,
                price: data.price,
                img: imageURL[0],
                img1: imageURL[1],
                img2: imageURL[2],
                img3: imageURL[3],

                // img1: imageURL1,

                ProductUpdate: data.ProductUpdate,
                author: data.author,
                publishDate: new Date().toLocaleDateString(),
                status: "Pending",
                authorEmail: user.email,
                expense: data.expense
            }


            console.log("Blogdata", blogInfo)
            axios.post('http://localhost:5000/products', blogInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Product Added Successfully')
                        reset()

                    }
                })
            console.log(data);

            reset();
        }



    }


    const { register, handleSubmit, reset } = useForm();
    // const onSubmit = (data) => {
    //     axios.post('http://localhost:5000/products', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Product Added Successfully')
    //                 reset()

    //             }
    //         })
    // }

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
                                    <Form.Control {...register("img")} placeholder="img " multiple type="file" />

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
