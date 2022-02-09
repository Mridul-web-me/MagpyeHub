import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import Slider from 'react-slick';
// import Slider from 'react-slick';
import useProduct from '../../../hooks/Product/useProduct';
import AllFavProduct from './AllFavProduct/AllFavProduct';
import './FavouriteProduct.css'

const FavouriteProduct = () => {


    const { handleAddToCart } = useProduct();


    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 3;

    // const category = 'bedding'
    useEffect(() => {
        // fetch('./ProductData.JSON')
        fetch(`https://immense-spire-59977.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                // console.log(pageCount);
                setLoading(false)
            });
    }, [page]);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={{
            overflow: 'hidden'
        }}>
            <Container fluid>

                <h2> Favorite Product </h2>

                <Slider className='favouriteProductCard' {...settings}>
                    {
                        products.map(product =>

                            <AllFavProduct
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></AllFavProduct>
                        )
                    }


                </Slider>
            </Container>
        </div>
    )
}

export default FavouriteProduct


//    