import React from 'react'
import { Container, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'



const Pillows = () => {

    const {filters, handleAddToCart} = useProduct();

    return (
        <div>
            <Header></Header>
            This is pillow
            <Container fluid>
                {<Row xs={1} md={3} className="g-4">
                    {
                        filters.map(product =>

                            <AllProduct
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></AllProduct>
                        )
                    }
                </Row>}
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Pillows
