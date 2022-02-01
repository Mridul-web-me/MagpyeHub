import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import useProduct from '../../../hooks/Product/useProduct';
import AllFavProduct from './AllFavProduct/AllFavProduct';


const FavouriteProduct = () => {


    const { handleAddToCart } = useProduct();


    const [cart, setCart] = useState([]);

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
                console.log(pageCount);
            });
    }, [page]);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <Container fluid>
            <div>
                <h2> Favorite Product </h2>
                {<Slider {...settings}>
                    {
                        products.map(product =>

                            <AllFavProduct
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></AllFavProduct>
                        )
                    }
                </Slider>}
            </div>
        </Container>
    )
}

export default FavouriteProduct


//    