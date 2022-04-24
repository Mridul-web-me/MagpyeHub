import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Header/Header'
import PromoUnit from '../../PromoUnit/PromoUnit'

const Men = () => {
    return (
        <>
            <Helmet>
                <title>Men</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
        </>
    )
}

export default Men