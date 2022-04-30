import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'
import img1 from '../../../img/Women/1.webp'
import img2 from '../../../img/Women/2.webp'
import img3 from '../../../img/Women/3.webp'
import img4 from '../../../img/Women/4.webp'
import img5 from '../../../img/Women/5.webp'
import img6 from '../../../img/Women/6.webp'
import img7 from '../../../img/Women/7.webp'
import img8 from '../../../img/Women/8.webp'
import img9 from '../../../img/Women/9.jpg'
import img10 from '../../../img/Women/10.webp'
const Women = () => {
    return (
        <>
            <Helmet>
                <title>Women</title>
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
                    }}>Women</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/women"> Women </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Clothing</h6>
                        <div className="filterItem">
                            <Link to="/product/women/dresses">Dresses</Link><br />
                            <Link to="/product/women/jeans">Jeans</Link><br />
                            <Link to="/product/women/shirtsTops">Shirts & Tops</Link><br />
                            <Link to="/product/women/shorts">Shorts</Link><br />
                            <Link to="/product/women/skirts">Skirts</Link><br />
                            <Link to="/product/women/sportsClothes ">Sports & Clothes  </Link><br />
                            <Link to="/product/women/swimwearBeachwear ">Swimwear Beachwear  </Link><br />
                            <Link to="/product/women/women-Trousers">Trousers</Link><br />
                            <Link to="/product/women/leggings">Leggings</Link><br />
                            <Link to="/product/women/plusSize">Plus Size</Link><br />
                            <Link to="/product/women/maternityClothes ">Maternity Clothes</Link><br />
                            <Link to="/product/women/cashmere">Cashmere</Link><br />
                            <Link to="/product/women/coatsJackets ">Coats & Jackets</Link><br />
                            <Link to="/product/women/jumpersKnitwear ">Jumpers & Knitwear</Link><br />
                            <Link to="/product/women/jumpsuits ">Jumpsuits</Link><br />
                            <Link to="/product/women/linen">Linen</Link><br />
                            <Link to="/product/women/loungewear ">Loungewear</Link><br />
                            <Link to="/product/women/petite ">Petite</Link><br />
                            <Link to="/product/women/occasionwear ">Occasionwear</Link><br />
                            <Link to="/product/women/weddingBoutique ">Wedding</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Footwear</h6>
                        <div className="filterItem">
                            <Link to="/product/women-shoes">Shoes</Link><br />
                            <Link to="/product/women-sandals">Sandals</Link><br />
                            <Link to="/product/women-slippers">Slippers</Link><br />
                            <Link to="/product/women-trainersAndPlimsoles">Trainers & Plimsoles</Link><br />
                            <Link to="/product/women-courtShoes">Court Shoes</Link><br />
                            <Link to="/product/women-boots">Boots</Link><br />
                            <Link to="/product/women-pumps">Court Pumps</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Lingerie, Nightwear & Hosiery</h6>
                        <div className="filterItem">
                            <Link to="/product/brasSportsBras">Bras & Sports Bras</Link><br />
                            <Link to="/product/Nightwear">Nightwear</Link><br />
                            <Link to="/product/socks">Socks</Link><br />
                            <Link to="/product/Knickers">Knickers</Link><br />
                            <Link to="/product/tights">Tights</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Accessories</h6>
                        <div className="filterItem">
                            <Link to="/product/women-handbags">Handbags</Link><br />
                            <Link to="/product/women-purses">Purses</Link><br />
                            <Link to="/product/women-belts">Belts</Link><br />
                            <Link to="/product/women-sunglasses">Sunglasses</Link><br />
                            <Link to="/product/women-jewellery">Jewellery</Link><br />
                            <Link to="/product/women-hats">Hats</Link><br />
                            <Link to="/product/women-watches">Watches</Link><br />
                            <Link to="/product/women-hairAccessories">Hair Accessories</Link><br />
                            <Link to="/product/women-hatsGlovesScarves">Hats, Gloves & Scarves</Link><br />
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
                                    }}> DRESSES</h5>
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
                                    }}> TOPS</h5>
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
                                    }}> NEW IN</h5>
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
                                    }}> COATS</h5>
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
                                    }}> KNITWEAR</h5>
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
                                    }}>HANDBAGS</h5>
                                </Link>

                            </Col>

                        </Row>
                        <Row>
                            <hr />
                            <br />
                            <h4>GETAWAYS & HOLIDAYS</h4>
                            <br />
                            <Col md={3} xs={12}>
                                <img src={img7} alt="" className='img-fluid' />
                                <h5>Shop Swimwear</h5>
                            </Col>
                            <Col md={3} xs={12}>
                                <img src={img8} alt="" className='img-fluid' />
                                <h5>Shop Summer Dresses</h5>
                            </Col>
                            <Col md={3} xs={12}>
                                <img src={img9} alt="" className='img-fluid' />
                                <h5>Shop Sandals</h5>
                            </Col>
                            <Col md={3} xs={12}>
                                <img src={img10} alt="" className='img-fluid' />
                                <h5>Shop Suitcases</h5>
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

export default Women