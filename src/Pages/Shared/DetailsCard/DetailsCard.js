import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const DetailsCard = ({ subject }) => {
    const { title, details, image_url, rating, total_view, starting_date } = subject
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='my-3 text-primary fs-3'>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Card.Text className='text-primary fs-5'>
                    Course starting date: {starting_date}
                </Card.Text>
                <Button variant="info"><Link to="/checkout">Get premium access</Link></Button>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default DetailsCard;