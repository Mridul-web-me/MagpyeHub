import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import AllProduct from '../../../AllProduct/AllProduct'

const ThrowsblanketsandSpreads = () => {

    const { handleAddToCart } = useProduct();

    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 2;
    const category = 'Bedding'
    useEffect(() => {
        // fetch('./ProductData.JSON')
        fetch(`http://localhost:5000/products?category=${category}&&page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                // console.log(pageCount);
            });
    }, []);
    return (
        <div>
            <Header></Header>
            {<Row xs={1} md={3} className="g-4">
                {
                    products.map(product =>

                        <AllProduct
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        // pageCount={pageCount}
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
            <Footer></Footer>
        </div>
    )
}

export default ThrowsblanketsandSpreads
