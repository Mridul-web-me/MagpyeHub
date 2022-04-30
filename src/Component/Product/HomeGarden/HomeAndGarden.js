import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'
import './HomeAndGarden.css'
import img1 from '../../../img/HomeAndGarden/1.webp'
import img2 from '../../../img/HomeAndGarden/2.webp'
import img3 from '../../../img/HomeAndGarden/3.webp'
import img4 from '../../../img/HomeAndGarden/4.webp'
import img5 from '../../../img/HomeAndGarden/5.webp'
import img6 from '../../../img/HomeAndGarden/6.webp'
import img7 from '../../../img/HomeAndGarden/7.webp'
import img8 from '../../../img/HomeAndGarden/8.webp'
import img9 from '../../../img/HomeAndGarden/9.webp'
import img10 from '../../../img/HomeAndGarden/10.webp'

const HomeAndGarden = () => {
    return (
        <>
            <Helmet>
                <title>Home & Garden</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid >
                <Row>
                    <h3 style={{
                        textAlign: 'center',
                        color: '#303030', fontSize: '20px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>Home & Garden</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/HomeAndGarden"> Home & Garden </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Home Furnishings & Accessories</h6>
                        <div className="filterItem">
                            <Link to="/product/bedding">Bed Sheets</Link> <br />
                            <Link to="/product/pillows">Pillows</Link> <br />
                            <Link to="/product/pillowCases">Pillow Cases</Link> <br />
                            <Link to="/product/throwsBlanketsAndSpreads">Throws, blankets and Spreads</Link> <br />
                            <Link to="/product/childrensBedding">Children's Bedding</Link> <br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Cooking & Dining</h6>
                        <div className="filterItem">
                            <Link to="/product/cutlery">Tableware & Cutlery</Link> <br />
                            <Link to="/product/glassesDrinkware">Glasses & Drinkware</Link> <br />
                            <Link to="/product/potsPans">Pots & Pans</Link> <br />
                            <Link to="/product/foodProcessorsMixersBlendersJuicers">Food Processors & Mixers</Link> <br />
                            <Link to="/product/blendersJuicers">Blenders & Juicers</Link> <br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Home Décor & Accessories</h6>
                        <div className="filterItem">
                            <Link to="/product/cushions">Cushions & Bean Bags</Link> <br />
                            <Link to="/product/candlesHomeFragrance">Candles & Home Fragrance</Link> <br />
                            <Link to="/product/towels">Towels</Link> <br />
                            <Link to="/product/mirrors"> Mirrors</Link> <br />
                            <Link to="/product/rugs">Rugs</Link> <br />
                            <Link to="/product/wallpapers"> Wallpapers</Link> <br />
                            <Link to="/product/storage"> Storage</Link> <br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Curtains, Blinds & Floors</h6>
                        <div className="filterItem">
                            <Link to="/product/curtains">Curtains</Link> <br />
                            <Link to="/product/madeToMeasureCurtains">Made to Measure curtains</Link> <br />
                            <Link to="/product/blinds">Blinds</Link> <br />
                            <Link to="/product/carpetsFlooring"> Carpets & Flooring</Link> <br />
                        </div>
                        <hr />

                        <h6 style={{ textAlign: 'start' }}>Garden</h6>
                        <div className="filterItem">
                            <Link to="/product/gardenFurnitureSets">Garden Furniture Sets</Link> <br />
                            <Link to="/product/gardenSeating">Garden Seating</Link> <br />
                            <Link to="/product/outdoorlights">Outdoor lights</Link> <br />
                            <Link to="/product/bBQStands"> BBQ Stands</Link> <br />
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
                            <Col md={2}>
                                <Link to="/product/rugs" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>RUGS</h5>
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
                                    }}>CUSHIONS</h5>
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
                                    }}>DUVET COVERS</h5>
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
                                    }}>TOWELS</h5>
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
                                    }}>PILLOWS</h5>
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
                                    }}>WALLPAPER</h5>
                                </Link>

                            </Col>
                            <img src={img7} alt="" style={{ margin: ' 50px 0' }} />
                        </Row>
                        <Row>
                            <Col md={4} xs={12}>
                                <img src={img8} alt="" className='img-fluid' />
                                <h5>Bedding</h5>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={img9} alt="" className='img-fluid' />
                                <h5>Dining Room</h5>
                            </Col>
                            <Col md={4} xs={12}>
                                <img src={img10} alt="" className='img-fluid' />
                                <h5>Accessories</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default HomeAndGarden