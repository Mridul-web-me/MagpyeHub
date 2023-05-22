import React from 'react'
import error from '../../img/error.png'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter'
const NotFound = () => {
  return (
    <div>
        <div>
            <Header></Header>
            <img className="img-fluid" src={error} alt="" />
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default NotFound