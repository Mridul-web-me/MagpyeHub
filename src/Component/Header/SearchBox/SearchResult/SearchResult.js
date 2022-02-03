import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';

const SearchResult = (props) => {
    // const { _id, title, img, category, price } = props.product;
    const { searchText } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://immense-spire-59977.herokuapp.com/products?searchText=${searchText}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        // console.log(product);
    }, [])

    return <div>
        <Header></Header>
        <Col>
            <Card>
                <Card.Img className='img-fluid' variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    {/* <Card.Text>
                        {category}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <Button onClick={() => props.handleAddToCart(props.product)} type='button' >Buy</Button>
                    <Link to={`/placeOrder/${_id}`}>
                        <Button variant="outline-primary">View</Button>
                    </Link> */}
                </Card.Body>
            </Card>
        </Col>
        <Footer></Footer>
    </div>
};

export default SearchResult;
