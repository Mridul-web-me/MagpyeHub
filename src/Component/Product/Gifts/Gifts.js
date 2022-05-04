import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

import img1 from '../../../img/Gift/1.webp'
import img2 from '../../../img/Gift/2.webp'
import img3 from '../../../img/Gift/3.webp'
import img4 from '../../../img/Gift/4.webp'
import img5 from '../../../img/Gift/5.webp'
import img6 from '../../../img/Gift/6.webp'

const Gifts = () => {
    return (
        <>
            <Helmet>
                <title>Gifts</title>
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
                    }}>Gifts</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/Gifts"> Gifts </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Gifts By Recipient</h6>
                        <div className="filterItem">
                            <Link to="/product/GiftsForHer">Gifts for Her</Link><br />
                            <Link to="/product/GiftsForHim">Gifts for Him</Link><br />
                            <Link to="/product/GiftsForKids">Gifts for Kids</Link><br />
                            <Link to="/product/GiftsForCouples">Gifts for Couples</Link><br />
                            <Link to="/product/GiftsForBabies">Gifts for Babies</Link><br />
                            <Link to="/product/GiftsForTeenagers">Gifts for Teenagers</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Food & Drink Gifts</h6>
                        <div className="filterItem">
                            <Link to="/product/Hampers">Hampers</Link><br />
                            <Link to="/product/Chocolate">Chocolate</Link><br />
                            <Link to="/product/Alcohol">Alcohol</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Popular Gifts</h6>
                        <div className="filterItem">
                            <Link to="/product/BeautyFragranceGifts">Beauty & Fragrance Gifts</Link><br />
                            <Link to="/product/GamesAndPuzzles">Games and Puzzles</Link><br />
                            <Link to="/product/CandlesHomeFragrance">Candles & Home Fragrance</Link><br />
                            <Link to="/product/CookingBaking">Cooking & Baking </Link><br />
                            <Link to="/product/Gardening">Gardening </Link><br />
                            <Link to="/product/GiftWrapPartyShop">Gift Wrap & Party Shop</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Gift Inspiration</h6>
                        <div className="filterItem">
                            <Link to="/product/LuxuryGifts">Luxury Gifts</Link><br />
                            <Link to="/product/Techies">Techies</Link><br />
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

                    <Col md={10} xs={12}>
                        <Row md={12}>
                            <Col md={3}>
                                <Link to="/product/Chocolate" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>GIFT FOOD</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/LuxuryGifts" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>LUXURY GIFT</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/GiftsForCouples" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>WEDDING GIFT</h5>
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
                            {/* <img src={img7} alt="" style={{ margin: ' 50px 0' }} /> */}
                        </Row>
                        {/* <Row>
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
                        </Row> */}
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default Gifts