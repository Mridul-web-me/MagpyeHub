import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useProduct from '../../../hooks/Product/useProduct';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import DisplayProduct from './DisplayProduct';

const ManageProducts = () => {

  // const [allProducts, setAllProduct] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:5000/products')
  //     .then(res => res.json())
  //     .then(data => setAllProduct(data))
  // }, [])


  const { AllProducts } = useProduct()

  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          {
            AllProducts.map(product => <DisplayProduct key={product._id}
              product={product}>

            </DisplayProduct>)
          }
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default ManageProducts;
