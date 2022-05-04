import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'
import img1 from '../../../img/Men/1.webp'
import img2 from '../../../img/Men/2.webp'
import img3 from '../../../img/Men/3.webp'
import img4 from '../../../img/Men/4.webp'
import img5 from '../../../img/Men/5.webp'
import img6 from '../../../img/Men/6.webp'
import img7 from '../../../img/Men/7.webp'
import img8 from '../../../img/Men/8.webp'
import img9 from '../../../img/Men/9.webp'
import img10 from '../../../img/Men/10.webp'
import img11 from '../../../img/Men/11.webp'

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

                    <Col md={10} xs={12}>
                        <Row md={12}>
                            <Col md={2}>
                                <Link to="/product/t-shirts" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>T-SHIRTS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/menShirts" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img2} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>SHIRTS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/men-jumpersCardigans" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img3} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>JUMPERS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/men-coatsJackets" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img4} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>COATS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/product/men-Shoes" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img5} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>SHOES</h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/product/waistcoats" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img6} alt="" width='130px' fluid />
                                    <h5 style={{
                                        fontSize: '18px'
                                    }}>NEW IN</h5>
                                </Link>

                            </Col>

                        </Row>
                        <Container fluid>
                            <Row md={6}>
                                <Col md={6} xs={12}>
                                    <img src={img7} alt="" style={{ margin: ' 50px 0' }} className='img-fluid' />
                                </Col>
                                <Col md={6} style={{ marginTop: '70px' }}>
                                    <Row style={{ marginBottom: '20px' }}>
                                        <Col md={6}>
                                            <img src={img8} alt="" className='img-fluid' />
                                        </Col>
                                        <Col md={6}>
                                            <img src={img9} alt="" className='img-fluid' />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '20px' }}>
                                        <Col md={6}>
                                            <img src={img10} alt="" className='img-fluid' />
                                        </Col>
                                        <Col md={6}>
                                            <img src={img11} alt="" className='img-fluid' />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}

export default Men