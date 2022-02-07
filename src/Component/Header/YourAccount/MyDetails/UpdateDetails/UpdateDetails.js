import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import Header from '../../../Header';
import UpdateSingleDetail from '../UpdateSingleDetails/UpdateSingleDetails';

const UpdateDetails = () => {


    const { user } = useAuth();

    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`https://immense-spire-59977.herokuapp.com/addressBook?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <Container>
                {<Row>
                    {
                        profile.map(update => <UpdateSingleDetail
                            key={update._id}
                            update={update}
                        ></UpdateSingleDetail>)
                    }
                </Row>}
            </Container>
            <Footer></Footer>
        </div>
    )
};

export default UpdateDetails;
