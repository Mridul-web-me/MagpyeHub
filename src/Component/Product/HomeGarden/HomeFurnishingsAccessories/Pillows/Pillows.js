import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { getStoredCart } from '../../../../../fakeDB'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'


const Pillows = () => {

    const { AllProducts, handleAddToCart } = useProduct([]);
    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [price, setPrice] = useState(0);
    const size = 8;

    const category = 'bedding'
    useEffect(() => {
        fetch(`http://localhost:5000/products?category=${category}&&page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                console.log(data.products);
                setLoading(false)
            });
    }, [page]);



    const filterProduct = (catProduct) => {
        const updatedProduct = AllProducts.filter((curElem) => {
            return curElem.category === catProduct;
        });
        setFilter(updatedProduct);
    };

    const handleInput = (e) => {

        setPrice(e.target.value);
    }

    return (
        <div>
            <Header></Header>

            <Container fluid style={{
                margin: '40px 0'
            }}>
                <Row>
                    <Col xs={12} md={2}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Price Range</Accordion.Header>
                                <Accordion.Body>
                                    <input type="range" onInput={handleInput} />
                                    <p>Price: {price}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    <Button onClick={() => { filterProduct('t-shirt') }}>T-shirt</Button>
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
                    <Col xs={12} md={10}>
                        {loading ? <div className='text-center'> <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
                        </div> : <div>

                            {products.length ? <Row xs={1} md={4} className="g-4">
                                {
                                    products.filter(product => { return product.price > parseInt(price) })
                                        .map(product =>
                                            <>
                                                <AllProduct
                                                    key={product._id}
                                                    product={product}
                                                    handleAddToCart={handleAddToCart}
                                                // pageCount={pageCount}
                                                ></AllProduct>
                                            </>

                                        )
                                }
                            </Row> :
                                <Row xs={1} md={4} className="g-4">
                                    {
                                        filter.map(product =>
                                            <>
                                                <AllProduct
                                                    key={product._id}
                                                    product={product}
                                                    handleAddToCart={handleAddToCart}
                                                // pageCount={pageCount}
                                                ></AllProduct>
                                            </>

                                        )
                                    }
                                </Row>}
                        </div>
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



//     <Row xs={1} md={4} className="g-4">
//     {loading ? <div> <Spinner animation="grow" /></div> :
//         products.filter(range => { return range.price > parseInt(price, 10) })
//             .map(product =>
//                 <>
//                     <AllProduct
//                         key={product._id}
//                         product={product}
//                         handleAddToCart={handleAddToCart}
//                     pageCount={pageCount}
//                     ></AllProduct>
//                 </>

//             )
//     }

// </Row>
