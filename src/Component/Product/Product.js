import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'



const Product = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <a href="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></a>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <a href="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></a>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <a href="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></a>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <a href="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></a>
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={12} sm={6}>
                        <a href="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></a>
                    </Col>
                    <Col xs={12} sm={6}>
                        <a href="#"><img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" className='img-fluid' alt="" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
