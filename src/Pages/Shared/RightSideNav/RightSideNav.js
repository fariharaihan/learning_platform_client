import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/subject-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-info"><FaGoogle></FaGoogle> Log in with Google</Button>
                    <Button className='mb-5' variant="outline-dark"><FaGithub></FaGithub> Log in with GitHub</Button>

                </ButtonGroup>
            </div>
            <h3>All category: {categories.length}</h3>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Button variant="outline-secondary"><Link to={`/category/${category.id}`}>{category.name}</Link></Button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;