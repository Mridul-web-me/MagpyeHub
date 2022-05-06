import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

import Modal from 'react-bootstrap/Modal'
import Header from '../../../Header'
import PromoUnit from '../../../../PromoUnit/PromoUnit'
import Newsletter from '../../../../Newsletter/Newsletter'
import Footer from '../../../../Footer/Footer'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)


    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

    }




    // MyVerticallyCenteredModal
    //     show={modalShow}
    //     onHide={() => setModalShow(false)}

    return (
        <div>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container>
                <form onSubmit={handleAdminSubmit}>
                    <input className="form-control me-2" required placeholder="Search for Product & Brand..." aria-label="Search" onBlur={handleOnBlur} />
                    <Button type='submit'>Make Admin</Button>
                </form>
            </Container>

            <Newsletter></Newsletter>
            <Footer></Footer>
        </div >
    )
}

export default MakeAdmin