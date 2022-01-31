import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import { getStoredCart } from '../../../../../fakeDB'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'


const Pillows = () => {

    const { handleAddToCart } = useProduct();
    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 3;

    const category = 'bedding'
    useEffect(() => {
        // fetch('./ProductData.JSON')
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}&&category=${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                console.log(pageCount);
            });
    }, [page]);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                const AddedProduct = products.find(product => product._id === _id);

                if (AddedProduct) {
                    const quantity = savedCart[_id];
                    AddedProduct.quantity = quantity;
                }
                storedCart.push(AddedProduct);

            }
            setCart(storedCart);
        }
    }, [products])
    // const handleAddToCart = (product) => {
    //     const newCart = [...carts, product];
    //     setCart(newCart);
    //     addToDb(product._id);
    // }

    // const FilterProduct = products.filter((curElem) => {
    //     return (curElem.category === 'Camera')
    // });

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
                                        key={product}
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

export default Pillows
