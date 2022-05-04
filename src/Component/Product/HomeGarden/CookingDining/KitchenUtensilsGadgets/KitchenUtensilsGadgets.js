import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../../../Header/Header'
import PromoUnit from '../../../../PromoUnit/PromoUnit'

const KitchenUtensilsGadgets = () => {
    return (
        <>
            <Helmet>
                <title>Kitchen Utensils & Gadgets</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
        </>
    )
}

export default KitchenUtensilsGadgets