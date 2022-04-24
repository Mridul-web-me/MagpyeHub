import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useProduct from '../../../../hooks/Product/useProduct';

const Basket = () => {
    const { cart } = useProduct([])
    console.log(cart.title);
    return (
        <div>
            {/* <Col>
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
                    </Card.Body>
                </Card>
            </Col> */}
        </div>
    )
}

export default Basket;
