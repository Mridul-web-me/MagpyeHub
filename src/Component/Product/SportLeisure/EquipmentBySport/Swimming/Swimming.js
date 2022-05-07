import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import useProduct from '../../../../../hooks/Product/useProduct'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import Newsletter from '../../../../Newsletter/Newsletter'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import AllProduct from '../../../AllProduct/AllProduct'
const Swimming = () => {
    return (
        <>
            <Helmet>
                <title>Swimming</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
        </>
    )
}

export default Swimming