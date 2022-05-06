import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../../../Header/Header'
import PromoUnit from '../../../../PromoUnit/PromoUnit'

const MenTrainersAndPlimsoles = () => {
    return (
        <>
            <Helmet>
                <title>Trainers And Plimsoles</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
        </>
    )
}

export default MenTrainersAndPlimsoles