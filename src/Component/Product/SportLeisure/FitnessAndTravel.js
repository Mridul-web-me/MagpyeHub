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
                        <h6 style={{ textAlign: 'start' }}>Sportswear</h6>
                        <div className="filterItem">
                            <Link to="/sportAndLeisure/WomensClothing">Women's Clothing</Link><br />
                            <Link to="/sportAndLeisure/WomenSportsTrainers">Women's Sports Trainers</Link><br />
                            <Link to="/sportAndLeisure/MenClothing">Men's Clothing</Link><br />
                            <Link to="/sportAndLeisure/MenSportsTrainers">Men's Sports Trainers</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Fitness</h6>
                        <div className="filterItem">
                            <Link to="/sportAndLeisure/FitnessMachinesTechnology">Fitness Machines & Technology</Link><br />
                            <Link to="/sportAndLeisure/SportsEquipment">Sports Equipment</Link><br />
                            <Link to="/sportAndLeisure/Treadmills">Treadmills</Link><br />
                            <Link to="/sportAndLeisure/ExerciseBikes">Exercise Bikes</Link><br />
                            <Link to="/sportAndLeisure/CrossTrainers">Cross Trainers</Link><br />
                            <Link to="/sportAndLeisure/Weights">Weights</Link><br />
                            <Link to="/sportAndLeisure/Smartwatches">Smartwatches</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Equipment by Sport</h6>
                        <div className="filterItem">
                            <Link to="/sportAndLeisure/Cycling">Cycling </Link><br />
                            <Link to="/sportAndLeisure/GymTrainingFitness ">Gym, Training & Fitness </Link><br />
                            <Link to="/sportAndLeisure/Running">Running </Link><br />
                            <Link to="/sportAndLeisure/Swimming">Swimming </Link><br />
                            <Link to="/sportAndLeisure/Yoga">Yoga </Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Sports Brands</h6>
                        <div className="filterItem">
                            <Link to="/sportAndLeisure/ExploreOurBrands">Explore our Brands</Link><br />
                            <Link to="/sportAndLeisure/Adidas">Adidas</Link><br />
                            <Link to="/sportAndLeisure/SweatyBetty">Sweaty Betty</Link><br />
                            <Link to="/sportAndLeisure/TheNorthFace">The North Face</Link><br />
                            <Link to="/sportAndLeisure/Therabody">Therabody</Link><br />
                            <Link to="/sportAndLeisure/UnderArmour">Under Armour</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Hobbies & Crafts</h6>
                        <div className="filterItem">
                            <Link to="/sportAndLeisure/Haberdashery">Haberdashery</Link><br />
                            <Link to="/sportAndLeisure/GamesPuzzles">Games & Puzzles</Link><br />
                            <Link to="/sportAndLeisure/Crafts">Crafts</Link><br />
                            <Link to="/sportAndLeisure/Stationery">Stationery</Link><br />
                            <Link to="/sportAndLeisure/Books">Books</Link><br />
                            <Link to="/sportAndLeisure/SewingMachines">Sewing Machines</Link><br />
                            <Link to="/sportAndLeisure/WoolYarn">Wool & Yarn</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Travel & Luggage</h6>
                        <div className="filterItem">
                            <Link to="/sportAndLeisure/ViewAllLuggage">View All Luggage</Link><br />
                            <Link to="/sportAndLeisure/Backpacks">Backpacks</Link><br />
                            <Link to="/sportAndLeisure/CabinCases">Cabin Cases</Link><br />
                            <Link to="/sportAndLeisure/Suitcases">Suitcases</Link><br />
                            <Link to="/sportAndLeisure/HoldallsWeekendBags">Holdalls & Weekend Bags</Link><br />
                            <Link to="/sportAndLeisure/Camping">Camping</Link><br />
                            <Link to="/sportAndLeisure/HolidaySummerShop">Holiday & Summer Shop</Link><br />
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