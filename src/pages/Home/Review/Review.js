import axios from 'axios';
import React from 'react';
import {useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://enigmatic-hollows-08621.herokuapp.com/review', data)
      .then(res => {
        if (res.data.insertedId) {
        alert('Review Submited')
          }
    }) 
    };
    return (
      <div>
        <h4>Write your review here!</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="inputFilied" placeholder="Write Your Name" {...register("userName")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input className="inputFilied" placeholder='Your Email' {...register("email", { required: true })} />
                <br />
                <label>Details</label><br />
                <textarea className='reviewFilied'  {...register("reviewDetails", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is require</span>}
                <input type="submit" />
                </form>
        </div>
    );
};

export default Review;