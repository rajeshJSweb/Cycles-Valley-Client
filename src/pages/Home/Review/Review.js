import axios from 'axios';
import React from 'react';
import {useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/review', data)
      .then(res => {
        if (res.data.insertedId) {
        alert('Review Submited')
          }
    }) 
    };
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="inputFilied" placeholder="Write Your Name" {...register("name")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input className="inputFilied" defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                <label>Write Your Review</label><br />
                <input className='reviewFilied' {...register("review", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
                </form>
        </div>
    );
};

export default Review;