import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import LoginOption from '../LoginOption/LoginOption';
import SideNav from '../Shared/SideNav/SideNav';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })

    }

    return (
        <Container>
            <Row>
                <Col lg="4">
                    <SideNav></SideNav>
                </Col>
                <Col lg="8">
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
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                        <br></br>
                        <LoginOption></LoginOption>
                        <br></br>
                        <Button variant="outline-dark" type="submit" >
                            <Link to='/register'>Register Here</Link>
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;