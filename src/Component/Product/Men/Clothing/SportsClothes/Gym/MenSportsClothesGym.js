import { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../../hooks/Product/useProduct'
import Footer from '../../../../../Footer/Footer'
import Header from '../../../../../Header/Header'
import Newsletter from '../../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../../PromoUnit/PromoUnit'
import AllProduct from '../../../../AllProduct/AllProduct'
// import useProduct from '../../../../../hooks/Product/useProduct'
// import Footer from '../../../../Footer/Footer'
// import Header from '../../../../Header/Header'
// import Newsletter from '../../../../Newsletter/Newsletter'
// import PromoUnit from '../../../../PromoUnit/PromoUnit'
// import AllProduct from '../../../AllProduct/AllProduct'

const MenSportsClothesGym = () => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 8;
    const category = 'blazers'
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
                        marginBottom: '20px'
                    }}>Sports Clothes Gym</h3>
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
                                <Accordion.Header>Clothing</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('blazers') }} to="">Blazers</Link> <br />
                                        <Link onClick={() => { filterProduct('MenJeans') }} to="">Jeans</Link> <br />
                                        <Link onClick={() => { filterProduct('poloshirts') }} to="">Polo Shirts</Link> <br />
                                        <Link onClick={() => { filterProduct('menShirts') }} to="">Shirts</Link> <br />
                                        <Link onClick={() => { filterProduct('menShorts') }} to="">Shorts</Link> <br />
                                        <Link onClick={() => { filterProduct('MenSportsClothesGym') }} to="">Sports Clothes/Gym</Link> <br />
                                        <Link onClick={() => { filterProduct('suits') }} to="">Suits</Link> <br />
                                        <Link onClick={() => { filterProduct('swimwear') }} to="">Swimwear</Link> <br />
                                        <Link onClick={() => { filterProduct('trousers') }} to="">Trousers</Link> <br />
                                        <Link onClick={() => { filterProduct('t-shirts') }} to="">T-Shirts</Link> <br />
                                        <Link onClick={() => { filterProduct('waistcoats') }} to="">Waistcoats</Link> <br />
                                        <Link onClick={() => { filterProduct('partyWear') }} to="">Partywear</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Nightwear, Underwear & Socks</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('PyjamasNightwear') }} to="">Pyjamas & Nightwear</Link><br />
                                        <Link onClick={() => { filterProduct('MenSocks') }} to="">Socks</Link><br />
                                        <Link onClick={() => { filterProduct('underwear') }} to="">Underwear</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
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

export default MenSportsClothesGym
