import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import SingleAddress from './SingleAddress/SingleAddress';

const AddressBook = (props) => {

    const { user } = useAuth()
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`https://immense-spire-59977.herokuapp.com/addressBook?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])


    return (
        <>
            <Header></Header>

            <h4>ADDRESS BOOK</h4>
            <Container>
                {<Row>
                    {
                        profile.map(address =>
                            <SingleAddress
                                key={address._id}
                                address={address}
                            >

                            </SingleAddress>)
                    }
                </Row>}
            </Container>
            <Footer></Footer>
        </>
    );
}

export default AddressBook;
