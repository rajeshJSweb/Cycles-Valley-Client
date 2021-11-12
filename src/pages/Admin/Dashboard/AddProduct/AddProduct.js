import React from 'react';
import './AddProduct.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/addProduct', data)
      .then(res => {
        if (res.data.insertedId) {
            alert('New Product Added')
          }
    }) 
    };
    return (
        <div>
            <h4>Add New Products</h4>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-item" placeholder="Product Name" {...register("productName")} />
                <br/>
                <input className="input-item" placeholder="Price" {...register("price")} />
                <br/>
                <input className="input-item" placeholder="Details" {...register("details")} />
                <br />
                <input className="input-item" placeholder="Image Link" {...register("img")} />
                <br/>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;