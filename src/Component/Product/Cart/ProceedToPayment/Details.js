import React from 'react';

const Details = ({ address }) => {
    const { name, email, phone, townCity, country, postcode } = address
    return (
        <>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{townCity} {country} {postcode}</p>
        </>
    )
};

export default Details;
