import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Pagination, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'
import FilterProduct from '../../../FilterProduct/FilterProduct'
import './Bedding.css'


const Bedding = () => {
    // const [filters, setFilters] = useState([]);
    const { handleAddToCart, filterProduct, filters } = useProduct([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    // const [pageCount, setPageCount] = useState(0);
    // const [page, setPage] = useState(0);
    const [price, setPrice] = useState(0);
    const size = 8;

    const category = 'bedding'
    useEffect(() => {
        fetch(`http://localhost:5000/products?category=${category}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                // const count = data.count;
                // const pageNumber = Math.ceil(count / size);
                // setPageCount(pageNumber)
                console.log(data.products);
                setLoading(false)
            });
    }, []);

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
                                    <h1>Price: {price}</h1>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Home Furnishings & Accessories</Accordion.Header>
                                <Accordion.Body style={{
                                    textAlign: 'start'
                                }}>
                                    <Link to="/bedding" >Bedding</Link> <br />
                                    <button onClick={() => filterProduct("pillows")}>Pillows</button>
                                    <Link to="/throwsBlanketsAndSpreads">Throws, blankets and Spreads</Link> <br />
                                    <Link to="/towels">Towels</Link> <br />
                                    <Link to="/bathroomAccessories">Bathroom Accessories</Link> <br />
                                    <Link to="/cushions">Cushions</Link> <br />
                                    <Link to="/candlesAndHomeFragrances">Candles and Home Fragrances</Link> <br />
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
                        </div> : <Row xs={1} md={4} className="g-4">
                            {
                                products.map(product =>
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

                        </Row>
                        }
                        {loading ? <div className='text-center'> <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
                        </div> : <Row xs={1} md={4} className="g-4">
                            {/* {
                                filters.map((product) =>
                                    <>
                                        <FilterProduct
                                            key={product._id}
                                            product={product}
                                            handleAddToCart={handleAddToCart}
                                        ></FilterProduct>
                                    </>

                                )
                            } */}

                        </Row>
                        }
                        {/* <div className="pagination">
                            {
                                [...Array(pageCount).keys()]
                                    .map(number => <Button
                                        className={number === page ? 'selected' : ''}
                                        variant="light"
                                        key={number}
                                        onClick={() => setPage(number)}
                                    >{number + 1}</Button>)
                            }
                        </div> */}
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Bedding
