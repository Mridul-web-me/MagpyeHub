import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HeaderTop = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <h1>xs=6 md=4</h1>
                    </Col>
                    <Col xs={6} md={4}>
                        <h1>xs=6 md=4</h1>

                    </Col>
                    <Col xs={6} md={4}>
                        <h1>xs=6 md=4</h1>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderTop
