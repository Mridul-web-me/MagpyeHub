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



const GardenOutdoorlights = (props) => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 8;
    const category = 'GardenOutdoorlights'
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
                <title>Garde Out Door Lights</title>
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
                    }}>Garde Out Door Lights</h3>
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
                                <Accordion.Header>Living Room Furniture</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('sofasArmchairs') }}>Sofas & Armchairs</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('tVStands') }}>TV Stands</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('coffeeTables') }}>Coffee Tables</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('bookcasesShelving') }}>Bookcases & Shelving</Link> <br />
                                        <Link to="" onClick={() => { filterProduct('cabinetsSideboards') }}>Cabinets & Sideboards</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Bedroom Furniture</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('beds') }}>Beds</Link><br />
                                        <Link to="" onClick={() => { filterProduct('mattresses') }}>Mattresses</Link><br />
                                        <Link to="" onClick={() => { filterProduct('bedsideTables') }}>Bedside Tables</Link><br />
                                        <Link to="" onClick={() => { filterProduct('chestsDrawers') }}>Chests of Drawers</Link><br />
                                        <Link to="" onClick={() => { filterProduct('dressingTables') }}>Dressing Tables</Link><br />
                                        <Link to="" onClick={() => { filterProduct('wardrobes') }}>Wardrobes</Link><br />
                                        <Link to="" onClick={() => { filterProduct('childrenBedroom') }}>Children's Bedroom</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Dining Room Furniture</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('DiningTables') }}>Dining Tables</Link><br />
                                        <Link to="" onClick={() => { filterProduct('DiningChairs') }}>Dining Chairs </Link><br />
                                        <Link to="" onClick={() => { filterProduct('BarChairsStools') }}>Bar Chairs & Stools</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Home Office & Storage</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('OfficeDesks') }}>Office Desks</Link><br />
                                        <Link to="" onClick={() => { filterProduct('OfficeChairs') }}>Office Chairs</Link><br />
                                        <Link to="" onClick={() => { filterProduct('HomeStorage') }}>Home Storage</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Lighting</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link to="" onClick={() => { filterProduct('CeilingLights') }}>Ceiling Lights</Link><br />
                                        <Link to="" onClick={() => { filterProduct('DeskTableLamps') }}>Desk & Table lamps</Link><br />
                                        <Link to="" onClick={() => { filterProduct('FloorLamps') }}>Floor Lamps</Link><br />
                                        <Link to="" onClick={() => { filterProduct('WallLighting') }}>Wall Lighting</Link><br />
                                        <Link to="" onClick={() => { filterProduct('GardenOutdoorlights') }}>Garden & Outdoor lights</Link><br />
                                        <Link to="" onClick={() => { filterProduct('LightBulbs') }}>Light Bulbs</Link><br />
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

export default GardenOutdoorlights
