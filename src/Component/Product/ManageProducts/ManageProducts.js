import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const ManageProducts = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  const handleDelete = id => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.deletedCount) {
          alert('Successfully Deleted')
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
        }
      })
  }
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <h2>{products.length}</h2>
          {
            products.map(product => <div key={product._id}
              product={product}>
              <Container>
                <Row style={{

                  borderBottom: '1px solid rgb(159 159 159)',
                  margin: '10px 0'
                }}>
                  <Col xs={6} md={2}>
                    {/* <img src={`data:image/jpg;base64,${product.img}`} alt="" width="100px" height="100px" /> */}
                    <img src={product.img} alt="" width="100px" height="100px" />
                  </Col>
                  <Col xs={6} md={4} style={{
                    textAlign: 'start'
                  }}>
                    <Link to={`/placeOrder/${product._id}`}>
                      <h5>{product.title}</h5>
                    </Link>
                    <p>Product Code: {product._id}</p>
                  </Col>
                  <Col xs={6} md={2}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    </div>
                  </Col>
                  <Col xs={6} md={2}>

                  </Col>
                  <Col xs={6} md={2}>

                    <i class="fa-solid fa-xmark"></i>
                    <p>
                      <svg style={{
                        color: 'red',
                        cursor: 'pointer'
                      }} onClick={() => handleDelete(product._id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>)
          }
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default ManageProducts;
