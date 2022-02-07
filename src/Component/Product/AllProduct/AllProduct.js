import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllProduct.css'
const AllProduct = (props) => {

    const { _id, title, img, price } = props.product;

    return (
        <>

            <Col className="productCard">
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={`data:image/jpg;base64,${img}`} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                        <div className='groupButton'>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}>
                                <Button onClick={() => props.handleAddToCart(props.product)} type='button' style={{
                                    width: '100px',
                                    background: '#0091c0',
                                    border: '1px solid #0091c0'
                                }}>Buy</Button>
                                <Link to={`/placeOrder/${_id}`}>
                                    <Button style={{
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

export default AllProduct
