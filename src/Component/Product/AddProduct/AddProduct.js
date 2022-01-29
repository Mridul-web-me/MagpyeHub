// import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Header from '../../Header/Header';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ProductCode, setProductCode] = useState('')
    const [Category, setCategory] = useState('')
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
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        formData.append('ProductCode', ProductCode);
        formData.append('Category', Category);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log('Success', data))
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
                    onChange={e => setName(e.target.value)} />
                <br /> <br />
                <input
                    {...register("price")}
                    placeholder="Price"
                    onChange={e => setEmail(e.target.value)} />
                <br /> <br />
                <input
                    {...register("img")}
                    placeholder="Image"
                    onChange={e => setImage(e.target.files)}
                    type="file"
                    name='file'
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
