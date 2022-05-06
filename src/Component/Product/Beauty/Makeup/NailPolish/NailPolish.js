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

const NailPolish = () => {
    const [price, setPrice] = useState(0)
    const [filter, setFilter] = useState([])
    const { AllProducts, handleAddToCart } = useProduct();
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    const size = 8;
    const category = 'nailPolish'
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
    }, [category, page]);


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
                <title>Nail Polish</title>
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
                    }}>Nail Polish</h3>
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
                                <Accordion.Header>Makeup</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('foundations') }} to="">Foundations</Link> <br />
                                        <Link onClick={() => { filterProduct('concealers') }} to="">Concealers</Link> <br />
                                        <Link onClick={() => { filterProduct('eyeshadows') }} to="">Eyeshadows</Link> <br />
                                        <Link onClick={() => { filterProduct('mascaras') }} to="">Mascaras</Link> <br />
                                        <Link onClick={() => { filterProduct('lipsticks') }} to="">Lipsticks</Link> <br />
                                        <Link onClick={() => { filterProduct('nailPolish') }} to="">Nail Polish</Link> <br />
                                        <Link onClick={() => { filterProduct('makeupGiftsets') }} to="">Makeup Gift sets</Link> <br />
                                        <Link onClick={() => { filterProduct('MakeUpBrushes') }} to="">Make up Brushes</Link> <br />
                                        <Link onClick={() => { filterProduct('handNailsets') }} to="">Hand & Nail sets</Link> <br />
                                        <Link onClick={() => { filterProduct('makeupBags') }} to="">Makeup Bags</Link> <br />
                                        <Link onClick={() => { filterProduct('makeupAccessories') }} to="">Makeup Accessories</Link> <br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Fragrance</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('womensPerfume') }} to="">Women's Perfume</Link><br />
                                        <Link onClick={() => { filterProduct('perfumeGiftSets') }} to="">Perfume Gift Sets</Link><br />
                                        <Link onClick={() => { filterProduct('mensAftershave') }} to="">Men's Aftershave</Link><br />
                                        <Link onClick={() => { filterProduct('mensPerfume') }} to="">Men's Perfume</Link><br />
                                        <Link onClick={() => { filterProduct('aftershaveGiftSets') }} to="">Aftershave Gift Sets</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Skin & Body Care</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('cleansers') }} to="">Cleansers</Link><br />
                                        <Link onClick={() => { filterProduct('moisturisers') }} to="">Moisturisers</Link><br />
                                        <Link onClick={() => { filterProduct('bathsShower') }} to="">Baths & Shower</Link><br />
                                        <Link onClick={() => { filterProduct('bodyCare') }} to="">Body Care</Link><br />
                                        <Link onClick={() => { filterProduct('lipBalmCare') }} to="">Lip Balm & Care</Link><br />
                                        <Link onClick={() => { filterProduct('handFootCare') }} to="">Hand & Foot Care</Link><br />
                                        <Link onClick={() => { filterProduct('beautyToolsTechnology') }} to="">Beauty Tools & Technology</Link><br />
                                        <Link onClick={() => { filterProduct('skinBodyGiftSets') }} to="">Skin & Body Gift Sets</Link><br />
                                        <Link onClick={() => { filterProduct('mensGroomingShaving') }} to="">Men's Grooming, Shaving</Link><br />
                                        <Link onClick={() => { filterProduct('mensBathBody') }} to="">Mens Bath & Body</Link><br />
                                        <Link onClick={() => { filterProduct('mensWashBags') }} to="">Mens Wash Bags</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Hair Care & Styling</Accordion.Header>
                                <Accordion.Body>
                                    <div className="filterItem">
                                        <Link onClick={() => { filterProduct('hairCare') }} to="">Hair Care</Link><br />
                                        <Link onClick={() => { filterProduct('shampoo') }} to="">Shampoo</Link><br />
                                        <Link onClick={() => { filterProduct('conditioner') }} to="">Conditioner</Link><br />
                                        <Link onClick={() => { filterProduct('hairTreatments') }} to="">Hair Treatments</Link><br />
                                        <Link onClick={() => { filterProduct('hairStylingProducts') }} to="">Hair Styling Products</Link><br />
                                        <Link onClick={() => { filterProduct('hairBrushes') }} to="">Hair Brushes</Link><br />
                                        <Link onClick={() => { filterProduct('electricalHairBeauty') }} to="">Electrical Hair & Beauty</Link><br />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
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

export default NailPolish
