import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const AllFavProduct = ({ product, handleAddToCart }) => {
    const { _id, title, img, category, price } = product;
    return (
        <>

            <Col className="productCard">
                <Card>
                    <Card.Img className='img-fluid' variant="top" style={{ height: '200px' }} src={img} height="300px" />
                    <Card.Body>
                        <Link to={`/placeOrder/${_id}`} style={{
                            textDecoration: 'none',
                            color: '#303030'
                        }}>
                            <Card.Title>{title}</Card.Title>
                        </Link>
                        <Card.Text>
                            {category}
                        </Card.Text>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                        <div className='groupButton'>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}>
                                <Button onClick={() => handleAddToCart(product)} type='button' style={{
                                    width: '100px',
                                    background: '#0091c0',
                                    border: '1px solid #0091c0'
                                }} >Buy</Button>
                                <Link to={`/placeOrder/${_id}`}>
                                    <Button variant="outline-primary" style={{
                                        width: '100px',
                                        background: '#fff',
                                        border: '1px solid #0091c0',
                                        color: '#0091c0'
                                    }}>View</Button>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default AllFavProduct;
