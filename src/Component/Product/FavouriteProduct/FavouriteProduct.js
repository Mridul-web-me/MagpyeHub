import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import Slider from 'react-slick';
// import Slider from 'react-slick';
import useProduct from '../../../hooks/Product/useProduct';
import AllFavProduct from './AllFavProduct/AllFavProduct';
import './FavouriteProduct.css'
import img from '../../../img/favorit.jpg'

const FavouriteProduct = () => {

    const { handleAddToCart } = useProduct();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    const category = 'bedding'
    useEffect(() => {
        fetch(`https://desolate-spire-57096.herokuapp.com/products?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            });
    }, [category]);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div style={{
            overflow: 'hidden'
        }}>
            <img src={img} alt="" />
            <Container fluid>

                {loading ? <div className='text-center'><Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="info" />
                </div> : <Slider className='favouriteProductCard' {...settings}>
                    {
                        products.map(product =>
                            <AllFavProduct
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></AllFavProduct>
                        )
                    }
                </Slider>}
            </Container>
        </div>
    )
}

export default FavouriteProduct


//    