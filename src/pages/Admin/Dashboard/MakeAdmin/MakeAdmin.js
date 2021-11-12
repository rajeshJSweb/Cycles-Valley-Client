import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const onSubmit = data => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json' 
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }
        }) 
       
        data.preventDefault();
    };
    return (
        <div>
            <h4>Make a new user as admin role!</h4>
            <form onSubmit={onSubmit}>
                <input onBlur={handleOnBlur} type="email" placeholder="Enter Email" />
            <input type="submit" />
            </form>
            {success && <h5>Admin created successfully</h5>}
        </div>
    );
};

export default MakeAdmin;