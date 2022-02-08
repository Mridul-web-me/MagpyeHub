// import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../../Header/Header';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [productCode, setProductCode] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)

    const handleOnSubmit = e => {
        // e.preventDefault();
        if (!image) {
            return;
        }
        else {
            reset();
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('productCode', productCode);
        formData.append('category', category);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error', error);
            })

    }

    return (
        <>

            <form onSubmit={handleSubmit((handleOnSubmit))}>
                <Header></Header> <br /> <br /> <br />
                <input
                    {...register("title")}
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)} />
                <br /> <br />
                <input
                    {...register("price")}
                    placeholder="Price"
                    onChange={e => setPrice(e.target.value)} />
                <br /> <br />
                <input
                    {...register("img")}
                    placeholder="Image"
                    onChange={e => setImage(e.target.files[0])}
                    type="file"
                    name='file'
                    multiple
                    accept='image/*' />
                <br /> <br />
                <input
                    {...register("productCode")}
                    placeholder="Product Code"
                    onChange={e => setProductCode(e.target.value)} />
                <br /> <br />
                <input
                    autocomplete="off"
                    {...register("category")}
                    placeholder="Category"
                    onChange={e => setCategory(e.target.value)} />
                <br /> <br />
                <input type="submit" />
            </form>
        </>

    )
}

export default AddProduct
