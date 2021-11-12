import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';

const Registration = () => {
    const {user, isLoading,authError, userRegisterByEmail, userLoginByGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    console.log('object', location.state?.from);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameSubmit = e => {
        setName(e.target.value);
        console.log(e.target.value);
      }
    const handleEmailSubmit = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
      }
    
      const handlePasswordSubmit = e => {
          setPassword(e.target.value);
          console.log(e.target.value);
    }
    
    const handleRegister = e => {
        userRegisterByEmail(name,email, password,history)
        e.preventDefault();
    };

    const handleGoogleLogin = () => {
        userLoginByGoogle()
    }
    return (
        <div className="mt-5">
            <div className="container form-container">
                {!isLoading &&
                    <Form className="input-filed" onSubmit={handleRegister}>
                    {user.email && <h4>Account created succssefully</h4>}
                    <h3>Sign in or create an account</h3>
                <Form.Group className="mb-3 input-filed" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control onBlur={handleNameSubmit} type="text" placeholder="Full Name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailSubmit} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 input-filed" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordSubmit} type="password" placeholder="Password" />
                </Form.Group>
                <input className="btn btn-primary my-3" type="submit" value="Continue with email" />
                    <br />
                <Link className="already my-3" to="/login">Already User?</Link>
                    <p>Or</p>
                <Button onClick={handleGoogleLogin} className="btn btn-primary">Continue with Google</Button>
                    </Form>}
                {isLoading && <h4>Please wait.......</h4>}
                {authError && <h4>{ authError}</h4>}
            </div>
        </div>
    );
};

export default Registration;