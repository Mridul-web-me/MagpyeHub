import React from 'react'
import ReactPlayer from 'react-player'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2>Welcome to Magpie Hub Online</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat accusamus tempora facere ea aliquid dolor adipisci commodi nihil itaque culpa quas saepe fuga, atque ipsam qui, non placeat ex! Delectus numquam architecto ut repellat, obcaecati expedita perspiciatis tempora. Fugit ullam, non tenetur corrupti doloremque excepturi tempora dignissimos voluptatem temporibus?</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ReactPlayer controls url="https://youtu.be/JreV3v1vRd8"></ReactPlayer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
