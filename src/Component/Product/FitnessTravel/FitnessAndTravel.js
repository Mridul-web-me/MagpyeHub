import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

const FitnessAndTravel = () => {
    return (
        <>
            <Helmet>
                <title>Fitness & Travel</title>
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
                    }}>Fitness & Travel</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/FitnessAndTravel"> Fitness & Travel </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Travel & Luggage</h6>
                        <div className="filterItem">
                            <Link to="/product/BackPacks">Back Packs</Link><br />
                            <Link to="/product/HandLuggage">Hand Luggage</Link><br />
                            <Link to="/product/Suitcases">Suitcases</Link><br />
                            <Link to="/product/HoldallsWeekendBags">Holdalls & Weekend  Bags</Link><br />
                            <Link to="/product/Camping">Camping</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Sewing & Crafts</h6>
                        <div className="filterItem">
                            <Link to="/product/SewingMachines">Sewing Machines</Link><br />
                            <Link to="/product/GamesPuzzles">Games & Puzzles</Link><br />
                            <Link to="/product/WoolYarn">Wool & Yarn</Link><br />
                            <Link to="/product/Stattonery">Stattonery</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Fitness</h6>
                        <div className="filterItem">
                            <Link to="/product/Treadmills">Treadmills</Link><br />
                            <Link to="/product/ExerciseBikes">Exercise Bikes</Link><br />
                            <Link to="/product/Weights">Weights</Link><br />
                            <Link to="/product/FitnessMachinesTechonology ">Fitness Machines & Techonology </Link><br />
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

export default FitnessAndTravel