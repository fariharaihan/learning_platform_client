import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="#home">
                    <img
                        src="https://img.freepik.com/free-vector/software-development-programming-coding-learning-information-technology-courses-it-courses-all-levels-computing-hi-tech-course-concept_335657-191.jpg?w=740&t=st=1666707128~exp=1666707728~hmac=8ecff63e4ec66d16404044217448852f5fbe7dcabcaf2c5b1c01d7d903473f50"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"

                    />
                </Navbar.Brand>

                <Navbar.Brand > <Link to='/'> IT Courses</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link><Link to='/login'>Log in</Link></Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user.photoURL} ></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;