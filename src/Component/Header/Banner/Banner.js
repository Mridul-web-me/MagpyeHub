import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='banner'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="data:image/jpeg;base64,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"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i2.wp.com/radiancegroup-bd.com/wp-content/uploads/2016/10/video-bg-1.jpg?fit=980%2C551&ssl=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
