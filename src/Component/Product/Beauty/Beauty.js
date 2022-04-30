import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

const Beauty = () => {
    return (
        <>
            <Helmet>
                <title>Beauty</title>
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
                    }}>Beauty</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/beauty"> Beauty </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Makeup</h6>
                        <div className="filterItem">
                            <Link to="/product/foundations">Foundations</Link><br />
                            <Link to="/product/concealers">Concealers</Link><br />
                            <Link to="/product/eyeshadows">Eyeshadows</Link><br />
                            <Link to="/product/mascaras">Mascaras</Link><br />
                            <Link to="/product/lipsticks">Lipsticks</Link><br />
                            <Link to="/product/nailPolish">Nail Polish</Link><br />
                            <Link to="/product/makeupAccessories">Makeup Accessories</Link><br />
                            <Link to="/product/handNailSets">Hand & Nail Sets</Link><br />
                            <Link to="/product/makeupBrushes">Makeup Brushes</Link><br />
                            <Link to="/product/makeupBags">Makeup Bags</Link><br />
                            <Link to="/product/tintedMoisturisers">Tinted Moisturisers</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Fragrance</h6>
                        <div className="filterItem">
                            <Link to="/product/womensPerfume">Women's Perfume</Link><br />
                            <Link to="/product/perfumeGiftSets">Perfume Gift Sets</Link><br />
                            <Link to="/product/mensAftershave">Men's Aftershave</Link><br />
                            <Link to="/product/aftershaveGiftSets">Aftershave Gift Sets</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Skin & Body Care</h6>
                        <div className="filterItem">
                            <Link to="/product/cleansers">Cleansers</Link><br />
                            <Link to="/product/moisturisers">Moisturisers</Link><br />
                            <Link to="/product/bathsShower">Baths & Shower</Link><br />
                            <Link to="/product/bodyCare">Body Care</Link><br />
                            <Link to="/product/lipBalmCare">Lip Balm & Care</Link><br />
                            <Link to="/product/handFootCare">Hand & Foot Care</Link><br />
                            <Link to="/product/skinCareTreatments">Skin Care & Treatments</Link><br />
                            <Link to="/product/sunCreamAfterSun">Sun Cream & After Sun</Link><br />
                            <Link to="/product/beautyToolsTechnology">Beauty Tools & Technology</Link><br />
                            <Link to="/product/menGrooming">Men's Grooming</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Hair Care & Styling</h6>
                        <div className="filterItem">
                            <Link to="/product/hairCare">Hair Care</Link><br />
                            <Link to="/product/shampoo">Shampoo</Link><br />
                            <Link to="/product/conditioner">Conditioner</Link><br />
                            <Link to="/product/hairTreatments">Hair Treatments</Link><br />
                            <Link to="/product/hairStylingProducts">Hair Styling Products</Link><br />
                            <Link to="/product/hairBrushes">Hair Brushes</Link><br />
                            <Link to="/product/electricalHairBeauty">Electrical Hair & Beauty</Link><br />
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

export default Beauty