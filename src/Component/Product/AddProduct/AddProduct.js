import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import Header from '../../Header/Header';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <>

            <form onSubmit={handleSubmit((onSubmit))}>
                <Header></Header> <br /> <br /> <br />
                <input {...register("title")} placeholder="Title" /> <br /> <br />
                <input {...register("price")} placeholder="Price" /> <br /> <br />
                <input type="file" {...register("img")} placeholder="Image Link" /> <br /> <br />
                <input {...register("productCode")} placeholder="Product Code" /> <br /> <br />
                <input {...register("category")} placeholder="Category" /> <br /> <br />
                <p>{ }</p>
                <input type="submit" />
            </form>
        </>

    )
}

export default AddProduct
