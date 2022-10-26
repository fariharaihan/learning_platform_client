import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log in
            </Button>
            <br></br>
            <Button variant="info" type="submit" className='mt-3'>
                <Link to='/register'>Sign Up Here</Link>
            </Button>
            <br></br>
            <Form.Text className="text-danger">


            </Form.Text>

        </Form>


    );
};

export default Login;