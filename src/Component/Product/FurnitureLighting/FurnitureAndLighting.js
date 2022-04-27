import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Newsletter from '../../Newsletter/Newsletter'
import PromoUnit from '../../PromoUnit/PromoUnit'

const FurnitureAndLighting = () => {
    return (
        <>
            <Helmet>
                <title>Furniture & Lighting</title>
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
                    }}>Furniture & Lighting</h3>
                    <hr />
                    <Col md={2} xs={12}>
                        <div className='mainRoute' style={{
                            textAlign: 'start',
                            padding: '10px 0'
                        }} >
                            <Link to="/home"> Homepage </Link> /
                            <Link to="/FurnitureAndLighting"> Furniture & Lighting </Link>
                            <hr />
                        </div>
                        <h6 style={{ textAlign: 'start' }}>Living Room Furniture</h6>
                        <div className="filterItem">
                            <Link to="/product/sofasArmchairs">Sofas & Armchairs</Link><br />
                            <Link to="/product/tVStands">TV Stands</Link><br />
                            <Link to="/product/coffeeTables">Coffee Tables</Link><br />
                            <Link to="/product/bookcasesShelving">Bookcases & Shelving</Link><br />
                            <Link to="/product/cabinetsSideboards">Cabinets & Sideboards</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Bedroom Furniture</h6>
                        <div className="filterItem">
                            <Link to="/product/beds">Beds</Link><br />
                            <Link to="/product/mattresses">Mattresses</Link><br />
                            <Link to="/product/bedsideTables">Bedside Tables</Link><br />
                            <Link to="/product/chestsDrawers">Chests of Drawers</Link><br />
                            <Link to="/product/dressingTables">Dressing Tables</Link><br />
                            <Link to="/product/wardrobes">Wardrobes</Link><br />
                            <Link to="/product/childrenBedroom">Children's Bedroom</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Dining Room Furniture</h6>
                        <div className="filterItem">
                            <Link to="/product/DiningTables">Dining Tables</Link><br />
                            <Link to="/product/DiningChairs">Dining Chairs </Link><br />
                            <Link to="/product/BarChairsStools">Bar Chairs & Stools</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Home Office & Storage</h6>
                        <div className="filterItem">
                            <Link to="/product/OfficeDesks">Office Desks</Link><br />
                            <Link to="/product/OfficeChairs">Office Chairs</Link><br />
                            <Link to="/product/HomeStorage">Home Storage</Link><br />
                        </div>
                        <hr />
                        <h6 style={{ textAlign: 'start' }}>Lighting</h6>
                        <div className="filterItem">
                            <Link to="/product/CeilingLights">Ceiling Lights</Link><br />
                            <Link to="/product/DeskTableLamps">Desk & Table lamps</Link><br />
                            <Link to="/product/FloorLamps">Floor Lamps</Link><br />
                            <Link to="/product/WallLighting">Wall Lighting</Link><br />
                            <Link to="/product/GardenOutdoorlights">Garden & Outdoor lights</Link><br />
                            <Link to="/product/LightBulbs">Light Bulbs</Link><br />
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
                            {/* <Col md={2}>
                                <Link to="/product/rugs" style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                }}>
                                    <img src={img1} alt="" width='130px' fluid />
                                    <h5>RUGS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/product/cushions">
                                    <img src={img2} alt="" width='130px' fluid />
                                    <h5>CUSHIONS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="//product/">
                                    <img src={img3} alt="" width='130px' fluid />
                                    <h5>DUVET COVERS</h5>
                                </Link>

                            </Col>
                            <Col md={2}>
                                <Link to="/">
                                    <img src={img4} alt="" width='130px' fluid />
                                    <h5></h5>
                                </Link>

                            </Col>
                            <Col md={2}>

                                <Link to="/">
                                    <img src={img5} alt="" width='130px' fluid />
                                    <h5></h5>
                                </Link>
                            </Col>
                            <Col md={2}>
                                <Link to="/">
                                    <img src={img6} alt="" width='130px' fluid />
                                    <h5></h5>
                                </Link>

                            </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>

    )
}

export default FurnitureAndLighting