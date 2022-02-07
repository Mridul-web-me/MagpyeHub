import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';

const SingleAddress = ({ address }) => {
    const { name, country, postcode, townCity, telephone, phone } = address

    return (
        <>
            <div style={{
                textAlign: 'start'
            }}>
                <h2>{name}</h2>
                <p>{townCity} {country} {postcode}</p>
                <p></p>
                <p></p>
                <p>Telephone: {telephone}</p>
                <p>Phone: {phone}</p>
            </div>
        </>
    )
};

export default SingleAddress;



                // <div>
                //     <h2>{name}</h2>
                //     <p>{country}</p>
                //     <p>{townCity}</p>
                //     <p>{postcode}</p>
                //     <p>{phone}</p>
                // </div> 