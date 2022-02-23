import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import Footer from '../../../Footer/Footer'
import Newsletter from '../../../Newsletter/Newsletter'
import PromoUnit from '../../../PromoUnit/PromoUnit'
import Header from '../../Header'
const MakeAdmin = () => {
    const [admin, setAdmin] = useState('')
    const handleOnBlur = e => {
        setAdmin(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { admin }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin('')
            })

    }
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