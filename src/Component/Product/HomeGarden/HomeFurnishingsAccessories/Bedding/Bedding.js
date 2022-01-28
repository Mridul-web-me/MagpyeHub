import { Container, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'


const Bedding = () => {

    const { products, handleAddToCart } = useProduct();
    const FilterProduct = products.filter((curElem) => {
        return (curElem.category === ('bedding'))
    });
    console.log(FilterProduct);


    return (
        <div>
            <Header></Header>
            <Container fluid>
                {<Row xs={1} md={3} className="g-4">
                    {
                        FilterProduct.map(product =>

                            <AllProduct
                                key={product._id}
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

export default Bedding
