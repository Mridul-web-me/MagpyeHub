import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {

    const { _id, title, img, category, price } = props.product;
    // const [cart, setCart] = useState([]);
    // filterProduct.map('bedding')

    // const handleAddToCart = (product) => {
    //     const newCart = [...cart, product]
    //     setCart(newCart);
    //     console.log(newCart.length);
    // }


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
                        <Button  onClick={() => props.handleAddToCart(props.product)} type='button' >Buy</Button>
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
