import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CourseDetails from '../../CourseDetails/CourseDetails';


const SubjectSummaryCard = ({ subject }) => {
    const { category_id, title, details, image_url, rating, total_view } = subject
    console.log(subject)
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='my-3 text-primary fs-3'>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 100 ?
                            <p>{details.slice(0, 100) + '....'} <Link to={`/coursedetails/${category_id}`}>read more</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
                <Button variant="info">Get premium access</Button>
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

export default SubjectSummaryCard;