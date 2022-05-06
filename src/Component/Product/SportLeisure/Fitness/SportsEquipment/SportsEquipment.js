import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../../../Header/Header'
import PromoUnit from '../../../../PromoUnit/PromoUnit'

const SportsEquipment = () => {
    return (
        <>
            <Helmet>
                <title>Sports Equipment</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
        </>
    )
}

export default SportsEquipment