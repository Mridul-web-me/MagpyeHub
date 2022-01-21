import React from 'react'
import { Container, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'


const Pillows = () => {
    
    const {products, handleAddToCart} = useProduct();

    const FilterProduct = products.filter((curElem) => {
        return (curElem.category === 'Camera')
    });

    return (
        <div>
            <Header></Header>
            This is pillow
            <Container fluid>
                {<Row xs={1} md={3} className="g-4">
                    {
                        FilterProduct.map(product =>

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
