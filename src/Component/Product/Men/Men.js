import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

const Men = () => {
    return (
        <>
            <Helmet>
                <title>Men</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid>
                <Row>
                    <h3 style={{
                        textAlign: 'center',
                        color: '#606060', fontSize: '20px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>Men</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/men"> Men </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Clothing</h6>
                        <div className="filterItem">
                            <Link to="/product/blazers">Blazers</Link><br />
                            <Link to="/product/MenJeans">Jeans</Link><br />
                            <Link to="/product/poloshirts">Polo Shirts</Link><br />
                            <Link to="/product/menShirts">Shirts</Link><br />
                            <Link to="/product/menShorts">Shorts</Link><br />
                            <Link to="/product/MenSportsClothesGym">Sports Clothes/Gym</Link><br />
                            <Link to="/product/suits">Suits</Link><br />
                            <Link to="/product/swimwear">Swimwear</Link><br />
                            <Link to="/product/trousers">Trousers</Link><br />
                            <Link to="/product/t-shirts">T-Shirts</Link><br />
                            <Link to="/product/waistcoats">Waistcoats</Link><br />
                            <Link to="/product/men-cashmere">Cashmere</Link><br />
                            <Link to="/product/men-coatsJackets">Coats & Jackets</Link><br />
                            <Link to="/product/men-sweatshirtsHoodies">Sweatshirts & Hoodies</Link><br />
                            <Link to="/product/men-jumpersCardigans">Jumpers & Cardigans</Link><br />
                            <Link to="/product/men-linen">Linen</Link><br />
                            <Link to="/product/men-loungewear">Loungewear</Link><br />
                            <Link to="/product/men-weddingShop">Wedding Shop</Link><br />
                            <Link to="/product/men-holidaySummerShop">Holiday & Summer Shop</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Nightwear, Underwear & Socks</h6>
                        <div className="filterItem">
                            <Link to="/product/PyjamasNightwear">Pyjamas & Nightwear</Link><br />
                            <Link to="/product/RobesAndDressingGowns">Robes & Dressing Gowns</Link><br />
                            <Link to="/product/MenSocks">Socks</Link><br />
                            <Link to="/product/underwear">Underwear</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Footwear</h6>
                        <div className="filterItem">
                            <Link to="/product/men-Boots">Boots</Link><br />
                            <Link to="/product/men-Shoes">Shoes</Link><br />
                            <Link to="/product/men-Sandals">Sandals</Link><br />
                            <Link to="/product/men-Slippers">Slippers</Link><br />
                            <Link to="/product/men-TrainersAndPlimsoles">Trainers</Link><br />
                            <Link to="/product/men-WalkingBootsShoes">Walking Boots & Shoes</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Accessories</h6>
                        <div className="filterItem">
                            <Link to="/product/men-mensBags">Men's Bags</Link><br />
                            <Link to="/product/men-belts">Belts</Link><br />
                            <Link to="/product/men-hats">Hats</Link><br />
                            <Link to="/product/men-wallets">Wallets</Link><br />
                            <Link to="/product/men-sunglasses">Sunglasses</Link><br />
                            <Link to="/product/men-watches">Watches</Link><br />
                            <Link to="/product/men-jewellery">Jewellery</Link><br />
                            <Link to="/product/men-suitcases">Suitcases</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Brand</h6>

                        <div className="filterItem">
                            <Link to='/brand/aptamil'>Aptamil</Link><br />
                            <Link to='/brand/baby-club'>Baby Club</Link><br />
                            <Link to='/brand/britax'>Britax</Link><br />
                            <Link to='/brand/fit-flop'>Fit Flop</Link><br />
                            <Link to='/brand/gucci' >Gucci</Link><br />
                            <Link to='/brand/hipp' >Hipp</Link><br />
                            <Link to='/brand/jole' >Jole</Link><br />
                            <Link to='/brand/levis'>Levis</Link><br />
                            <Link to='/brand/maxi-cosi'>Maxi Cosi</Link><br />
                            <Link to='/brand/phase-eight'>Phase Eight</Link><br />
                            <Link to='/brand/ted-baker'>Ted Baker</Link><br />
                        </div>
                    </Col>

                    {/* <Col md={10} xs={12}>
                        <Row md={12}>
                            <Col md={2}>
                                <Link to="/product/rugs" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}></h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/cushions" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}></h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/duvetCovers" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}></h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/towels" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}></h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/product/pillows" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}></h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/product/wallpaperPaintDIY" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}></h5>
                                </Link>

                            </Col>
                            <img src={img7} alt="" style={{ margin: ' 50px 0' }} />
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={img8} alt="" className='img-fluid' />
                                <h5></h5>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={img9} alt="" className='img-fluid' />
                                <h5></h5>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={img10} alt="" className='img-fluid' />
                                <h5></h5>
                            </Col>
                        </Row>
                    </Col> */}
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default Men