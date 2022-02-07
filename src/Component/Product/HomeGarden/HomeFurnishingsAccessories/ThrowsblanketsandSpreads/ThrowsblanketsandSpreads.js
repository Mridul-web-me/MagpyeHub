import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'

const ThrowsblanketsandSpreads = () => {

    const { handleAddToCart } = useProduct();

    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 2;
    const category = ''
    useEffect(() => {
        // fetch('./ProductData.JSON')
        fetch(`https://immense-spire-59977.herokuapp.com/products?category=${category}&&page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                // console.log(pageCount);
            });
    }, [page]);
    return (
        <div>
            <Header></Header>
            <Container fluid style={{
                margin: '40px 0'
            }}>
                <Row>
                    <Col xs={2}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={10}>
                        {<Row xs={1} md={3} className="g-4">
                            {
                                products.map(product =>

                                    <AllProduct
                                        key={product._id}
                                        product={product}
                                        handleAddToCart={handleAddToCart}
                                    // pageCount={pageCount}
                                    ></AllProduct>
                                )
                            }

                        </Row>
                        }
                        <div className="pagination">
                            {
                                [...Array(pageCount).keys()]
                                    .map(number => <Button
                                        className={number === page ? 'selected' : ''}
                                        variant="light"
                                        key={number}
                                        onClick={() => setPage(number)}
                                    >{number + 1}</Button>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default ThrowsblanketsandSpreads
