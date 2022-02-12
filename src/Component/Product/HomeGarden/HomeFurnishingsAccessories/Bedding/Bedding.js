import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Pagination, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'
// import FilterProduct from '../../../FilterProduct/FilterProduct'
import InputRange from 'react-input-range';
import './Bedding.css'


const Bedding = (props) => {
    const [price, setPrice] = useState(0)
    const { handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 6;
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
                    <Col md={2} xs={12}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Item 1</Accordion.Header>
                                <Accordion.Body>
                                    <InputRange
                                        step={2}
                                        value={price}
                                        onChange={handleInput} />
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
                    <Col md={10} xs={12}>
                        {loading ? <div className='text-center'> <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
                        </div> : <Row xs={1} md={4} className="g-4">
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

export default Bedding
