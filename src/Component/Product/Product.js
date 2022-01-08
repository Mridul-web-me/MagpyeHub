import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Product = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Link to="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Link to="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Link to="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Link to="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></Link>
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={12} sm={6}>
                        <Link to="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Link to="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
