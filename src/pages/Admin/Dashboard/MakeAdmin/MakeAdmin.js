import React from 'react';
import { useState } from "react";
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const onSubmit = data => {
        const user = { email };
        fetch('https://enigmatic-hollows-08621.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json' 
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true)
                }
        }) 
        data.preventDefault();
    };

    
    return (
        <div className="mt-5">
            <h4>Create a new admin!</h4>
            <form onSubmit={onSubmit}>
                <input onBlur={handleOnBlur} type="email" placeholder="Enter Email" />
            <input type="submit" />
            </form>
            {success && <h6 className="pt-3">Admin created successfully</h6>}
        </div>
    );
};

export default MakeAdmin;