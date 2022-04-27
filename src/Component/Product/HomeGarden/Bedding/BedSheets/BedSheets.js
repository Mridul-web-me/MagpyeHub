import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import AllProduct from '../../../AllProduct/AllProduct'
import './Bedding.css'


const BedSheets = (props) => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
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
            <Helmet>
                <title>Bedding</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>

            <Container fluid>
                <Row>
                    <h3 style={{
                        textAlign: 'start',
                        color: '#303030', fontSize: '26px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
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
                                        <input type="checkbox" onChange={() => { filterProduct('bedding') }} value="Bedding" />
                                        <label for="Bedding"> Bedding</label>

                                        <input type="checkbox" onChange={() => { filterProduct('pillows') }} value="pillows" />
                                        <label for="pillows"> pillows</label> <br />

                                        <input type="checkbox" onChange={() => { filterProduct('throwsBlanketsAndSpreads') }} value="throwsBlanketsAndSpreads" />
                                        <label for="throwsBlanketsAndSpreads"> Throws, blankets and Spreads</label> <br />

                                        <Link onClick={() => { filterProduct('bedding') }} to="">Bed Sheets</Link> <br />
                                        <Link onClick={() => { filterProduct('pillows') }} to="">Pillows</Link> <br />
                                        <Link onClick={() => { filterProduct('pillowCases') }} to="">Pillow Cases</Link> <br />
                                        <Link onClick={() => { filterProduct('throwsBlanketsAndSpreads') }} to="">Throws, blankets and Spreads</Link> <br />
                                        <Link onClick={() => { filterProduct('childrensBedding') }} to="">Children's Bedding</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Cooking & Dining</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('cutlery') }} to="">Tableware & Cutlery</Link> <br />
                                        <Link onClick={() => { filterProduct('glassesDrinkware') }} to="">Glasses & Drinkware</Link> <br />
                                        <Link onClick={() => { filterProduct('potsPans') }} to="">Pots & Pans</Link> <br />
                                        <Link onClick={() => { filterProduct('foodProcessorsMixersBlendersJuicers') }} to="">Food Processors & Mixers</Link> <br />
                                        <Link onClick={() => { filterProduct('blendersJuicers') }} to="">Blenders & Juicers</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Home Décor & Accessories</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('cushions') }} to="">Cushions & Bean Bags</Link> <br />
                                        <Link onClick={() => { filterProduct('candlesHomeFragrance') }} to="">Candles & Home Fragrance</Link> <br />
                                        <Link onClick={() => { filterProduct('towels') }} to="">Towels</Link> <br />
                                        <Link onClick={() => { filterProduct('mirrors') }} to=""> Mirrors</Link> <br />
                                        <Link onClick={() => { filterProduct('rugs') }} to="">Rugs</Link> <br />
                                        <Link onClick={() => { filterProduct('wallpapers') }} to=""> Wallpapers</Link> <br />
                                        <Link onClick={() => { filterProduct('storage') }} to=""> Storage</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Curtains, Blinds & Floors</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('curtains') }} to="">Curtains</Link> <br />
                                        <Link onClick={() => { filterProduct('madeToMeasureCurtains') }} to="">Made to Measure curtains</Link> <br />
                                        <Link onClick={() => { filterProduct('blinds') }} to="">Blinds</Link> <br />
                                        <Link onClick={() => { filterProduct('carpetsFlooring') }} to=""> Carpets & Flooring</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Garden</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('gardenFurnitureSets') }} to="">Garden Furniture Sets</Link> <br />
                                        <Link onClick={() => { filterProduct('gardenSeating') }} to="">Garden Seating</Link> <br />
                                        <Link onClick={() => { filterProduct('outdoorlights') }} to="">Outdoor lights</Link> <br />
                                        <Link onClick={() => { filterProduct('bBQStands') }} to=""> BBQ Stands</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Brand</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('aptamil') }} to="">Aptamil</Link><br />
                                        <Link onClick={() => { filterProduct('baby-club') }} to="">Baby Club</Link><br />
                                        <Link onClick={() => { filterProduct('britax') }} to="">Britax</Link><br />
                                        <Link onClick={() => { filterProduct('fit-flop') }} to="">Fit Flop</Link><br />
                                        <Link onClick={() => { filterProduct('gucci') }} to="">Gucci</Link><br />
                                        <Link onClick={() => { filterProduct('hipp') }} to="">Hipp</Link><br />
                                        <Link onClick={() => { filterProduct('jole') }} to="">Jole</Link><br />
                                        <Link onClick={() => { filterProduct('levis') }} to="">Levis</Link><br />
                                        <Link onClick={() => { filterProduct('maxi-cosi') }} to="">Maxi Cosi</Link><br />
                                        <Link onClick={() => { filterProduct('phase-eight') }} to="">Phase Eight</Link><br />
                                        <Link onClick={() => { filterProduct('ted-baker') }} to="">Ted Baker</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={9} xs={12}>
                        {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
                            <Spinner animation="grow" variant="info" />
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

export default BedSheets
