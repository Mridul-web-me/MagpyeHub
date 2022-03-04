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



const GiftsForHer = (props) => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 8;
    const category = 'GiftsForHer'
    useEffect(() => {
        fetch(`http://desolate-spire-57096.herokuapp.com/products?category=${category}&&page=${page}&&size=${size}`)
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
                <title>Gifts For Her</title>
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
                    }}>Gifts For Her</h3>
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
                                <Accordion.Header>Gifts By Recipient</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('giftsForHer') }} to="">Gifts for Her</Link><br />
                                        <Link onClick={() => { filterProduct('giftsForHim') }} to="">Gifts for Him</Link><br />
                                        <Link onClick={() => { filterProduct('giftsForKids') }} to="">Gifts for Kids</Link><br />
                                        <Link onClick={() => { filterProduct('giftsForCouples') }} to="">Gifts for Couples</Link><br />
                                        <Link onClick={() => { filterProduct('giftsForBabies') }} to="">Gifts for Babies</Link><br />
                                        <Link onClick={() => { filterProduct('giftsForTeenagers') }} to="">Gifts for Teenagers</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Food & Drink Gifts</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('Hampers') }} to="">Hampers</Link><br />
                                        <Link onClick={() => { filterProduct('Chocolate') }} to="">Chocolate</Link> <br />
                                        <Link onClick={() => { filterProduct('Alcohol') }} to="">Alcohol</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Popular Gifts</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('BeautyFragranceGifts') }} to="">Beauty & Fragrance Gifts</Link><br />
                                        <Link onClick={() => { filterProduct('GamesAndPuzzles') }} to="">Games and Puzzles</Link><br />
                                        <Link onClick={() => { filterProduct('CandlesHomeFragrance') }} to="">Candles & Home Fragrance</Link><br />
                                        <Link onClick={() => { filterProduct('CookingBaking') }} to="">Cooking & Baking </Link><br />
                                        <Link onClick={() => { filterProduct('Gardening') }} to="">Gardening </Link><br />
                                        <Link onClick={() => { filterProduct('GiftWrapPartyShop') }} to="">Gift Wrap & Party Shop</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Gift Inspiration</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('LuxuryGifts') }} to="">Luxury Gifts</Link> <br />
                                        <Link onClick={() => { filterProduct('Techies') }} to="">Techies</Link> <br />
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

export default GiftsForHer
