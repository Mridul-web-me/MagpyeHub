import React from 'react'
import { Link } from 'react-router-dom'
import rainbow from '../../img/sponsor/rainbow.jpg'
import hundred from '../../img/sponsor/100%.jpg'
import ekomi from '../../img/sponsor/ekomi.jpg'
import './Sponsor.css'

const Sponsor = () => {
    return (
        <div className='sponsor'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/">
                            <img className="img-fluid" src={rainbow} alt="" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="">
                            <img className="img-fluid" src={hundred} alt="" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link target="_blank" to="https://www.ekomi.co.uk/review-baby-baby-uk-ltd.html">
                            <img className="img-fluid" src={ekomi} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor
