import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';

const Login = () => {
    const {userLoginByEmail, userLoginByGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    

    const userEmailInput = e => {
        setEmail(e.target.value);
       
      }
    
      const userPasswordInput = e => {
          setPassword(e.target.value);
         
    }
    
    const userRegister = e => {
        userLoginByEmail(email, password)
            .then((result) => {
                history.push(redirect_uri);
                alert('Login Successfull')
        })
            .catch((error) => {
                alert('Login Failed')
            
        });
        e.preventDefault();
    };

    const userSignInUsingGoogle = () => {
        userLoginByGoogle()
            .then(result => {  
            history.push(redirect_uri);
        })
    };

    return (
        <div className="mt-5">
            <div className="container form-container">
                <Form className="input-filed" onSubmit={userRegister}>
                    <h3>Sign in or create an account</h3>
                <Form.Group className="mb-3 input-filed" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={userEmailInput} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 input-filed" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={userPasswordInput} type="password" placeholder="Password" />
                </Form.Group>
                <input className="btn btn-primary my-3" type="submit" value="Continue with email" />
                    <br />
                <Link className="already my-3" to="/registration">New User?</Link>
                    <p>Or</p>
                <Button onClick={userSignInUsingGoogle} className="btn btn-primary">Google Sign In</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;