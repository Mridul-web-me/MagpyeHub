import React, { useState } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
    // const [products, setProducts] = useState({});
    const [filters, setFilters] = useState("bedding");
    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             // setFilters(data);
    //         })
    // }, [])
    // const filterProduct = (categProduct) => {
    //     const updatedProduct = products.filter((curElem) => {
    //         return curElem.categorey === categProduct;
    //     });
    //     setFilters(updatedProduct);
    // };
    const { _id, title, img, category, price } = product;
    // const filterProduct = (categProduct) => {
    //     const updatedProduct = products.filter((curElem) => {
    //         return curElem.category === categProduct;
    //     });
    //     setFilters(updatedProduct);
    // };
    // console.log(filterProduct);
    return (
        <>
            <Col>
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {category}
                        </Card.Text>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                        <Link to={`/placeOrder/${_id}`}>
                            <Button>Buy</Button>
                        </Link>
                        <Link to={`/placeOrder/${_id}`}>
                            <Button variant="outline-primary">View</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default AllProduct
