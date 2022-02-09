import { Button, Container, Pagination, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'
import './Bedding.css'


const Bedding = () => {

    const { products, handleAddToCart, pageCount, setPage, page } = useProduct([]);

    const FilterProduct = products.filter((curElem) => {
        return (curElem.category === ('pillows'))
    });

    return (
        <div>
            <Header></Header>
            <Container fluid>
                <h1>Bedding</h1>
                {<Row xs={1} md={3} className="g-4">
                    {
                        FilterProduct.map(product =>

                            <AllProduct
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                                pageCount={pageCount}
                            ></AllProduct>
                        )
                    }
                </Row>}

                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <Button
                                className={number === page ? 'selected' : ''}
                                variant="light"
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</Button>)
                    }
                </div>

            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Bedding
