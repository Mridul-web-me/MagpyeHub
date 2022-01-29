import { Button, Container, Pagination, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'


const Bedding = () => {

    const { products, handleAddToCart, pageCount } = useProduct([]);
    // const FilterProduct = products.filter((curElem) => {
    //     return (curElem.category === ('Laptop'))
    // });
    // console.log(products, pageCount);

    // let active = 2;
    // let items = [pageCount];




    return (
        <div>
            <Header></Header>
            <Container fluid>
                {<Row xs={1} md={3} className="g-4">
                    {
                        products.map(product =>

                            <AllProduct
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></AllProduct>
                        )
                    }
                </Row>}

                {
                    // [...Array(pageCount).keys()]
                    //     .map(number => <Button>{number}</Button>)
                    // <Pagination size="sm">{items}</Pagination>
                    // [...Array(pageCount).keys()].map(number =>
                    //     <Pagination.Item >
                    //         {number}
                    //     </Pagination.Item>,
                    // )
                }

            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Bedding
