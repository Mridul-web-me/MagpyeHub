import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../../../Header/Header'
import PromoUnit from '../../../../PromoUnit/PromoUnit'

const WomenHatsGlovesScarves = () => {
    return (
        <>
            <Helmet>
                <title>Hats an Glovers Scarves</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
        </>
    )
}

export default WomenHatsGlovesScarves