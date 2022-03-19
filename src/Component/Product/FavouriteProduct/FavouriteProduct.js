import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import useProduct from '../../../hooks/Product/useProduct';
import AllFavProduct from './AllFavProduct/AllFavProduct';

const FavouriteProduct = () => {

    const { products, handleAddToCart } = useProduct();

    const FilterProduct = products.filter((curElem) => {
        return (curElem.category === ('Laptop'))
    });

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <Container>
            <div>
                <h2> Favorite Product </h2>
                {<Slider {...settings}>
                    {
                        FilterProduct.map(product =>

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
    );
};

export default FavouriteProduct;