import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import AllProduct from '../../../AllProduct/AllProduct'

const PotsPans = () => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 6;
    const category = 'potsPans'
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
    }, [category, products, page]);


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
            <PromoUnit></PromoUnit>
            <Container fluid>
                <Row>
                    <h3 style={{
                        textAlign: 'start',
                        color: '#303030', fontSize: '26px',
                        textTransform: 'uppercase',
                        margin: '20px 0'
                    }}>Bedding</h3>
                    <Col md={3} xs={12}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Price Range</Accordion.Header>
                                <Accordion.Body>
                                    <input type="range" onInput={handleInput} />
                                    <p>Price: {price}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Home Furnishings & Accessories</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('bedding') }} to="">Bedding</Link> <br />
                                        <Link onClick={() => { filterProduct('pillows') }} to="">Pillows</Link> <br />
                                        <Link onClick={() => { filterProduct('throwsBlanketsAndSpreads') }} to="">Throws, blankets and Spreads</Link> <br />
                                        <Link onClick={() => { filterProduct('towels') }} to="">Towels</Link> <br />
                                        <Link onClick={() => { filterProduct('bathroomAccessories') }} to="">Bathroom Accessories</Link> <br />
                                        <Link onClick={() => { filterProduct('cushions') }} to="">Cushions</Link> <br />
                                        <Link onClick={() => { filterProduct('candlesAndHomeFragrances') }} to="">Candles and Home Fragrances</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Cooking & Dining</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('potsPans') }} to="">Pots & Pans</Link><br />
                                        <Link onClick={() => { filterProduct('picnicware') }} to="">Picnicware</Link><br />
                                        <Link onClick={() => { filterProduct('tableware') }} to="">Tableware</Link><br />
                                        <Link onClick={() => { filterProduct('glassesDrinkware') }} to="">Glasses & Drinkware</Link><br />
                                        <Link onClick={() => { filterProduct('cutlery') }} to="">Cutlery</Link><br />
                                        <Link onClick={() => { filterProduct('foodProcessorsMixersBlendersJuicers') }} to="">Food Processors, Mixers, Blenders & Juicers</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Brand</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('potsPans') }} to="">Pots & Pans</Link><br />
                                        <Link onClick={() => { filterProduct('picnicware') }} to="">Picnicware</Link><br />
                                        <Link onClick={() => { filterProduct('tableware') }} to="">Tableware</Link><br />
                                        <Link onClick={() => { filterProduct('glassesDrinkware') }} to="">Glasses & Drinkware</Link><br />
                                        <Link onClick={() => { filterProduct('cutlery') }} to="">Cutlery</Link><br />
                                        <Link onClick={() => { filterProduct('foodProcessorsMixersBlendersJuicers') }} to="">Food Processors, Mixers, Blenders & Juicers</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={9} xs={12}>
                        {loading ? <div className='text-center'> <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
                        </div> : <div>

                            {!filter.length ? <Row xs={1} md={4} className="g-4">
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
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default PotsPans
