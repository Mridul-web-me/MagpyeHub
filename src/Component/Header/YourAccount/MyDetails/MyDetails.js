import React, { useEffect, useState } from 'react';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
import SingleDetails from '../SingleDetails/SingleDetails'
// import singleDetails from '../singleDetails/singleDetails';

const MyDetails = () => {
    const [address, setAddress] = useState([])
    useEffect(() => {
        fetch('https://immense-spire-59977.herokuapp.com/addressBook')
            .then(res => res.json())
            .then(data => setAddress(data))
    }, [])
    return (<div>
        <Header></Header>
        <div>
            {
                address.map(details =>

                    <SingleDetails
                        key={details._id}
                        details={details}
                    // handleAddToCart={handleAddToCart}
                    // pageCount={pageCount}
                    ></SingleDetails>
                )
            }
        </div>
        <Footer></Footer>

    </div>)
};

export default MyDetails;