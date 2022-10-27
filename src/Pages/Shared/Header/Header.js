import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import { FaUser } from 'react-icons/fa';
import { Button, Tooltip } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://img.freepik.com/free-vector/information-technology-courses-abstract-concept-illustration_335657-4474.jpg?w=740&t=st=1666883689~exp=1666884289~hmac=491a877be9c77de3ab05c9a7a58b32afd8c79b2e60ea4d9027aa9319ec2b7621"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand > <Link to='/'> Career Hunt</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/category/:id'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/vlog'>Blog</Link></Nav.Link>
                        <Nav.Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.uid ?
                                <>
                                    <Button onClick={handleLogOut} variant="info" className='me-2'>Log out</Button>
                                    <span> {user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL} ></Image>
                                        : <FaUser></FaUser>
                                    }
                                    </span>
                                </>
                                :
                                <Link to='/login'>Log in</Link>
                            }
                        </Nav.Link>
                        <Nav className='ms-4'>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                            />
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;