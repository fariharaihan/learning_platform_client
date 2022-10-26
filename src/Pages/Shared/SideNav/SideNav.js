import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/subject-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            {
                categories.map(category => <p key={category.id}>
                    <Button variant="outline-secondary"><Link to={`/category/${category.id}`}>{category.name}</Link></Button>
                </p>)
            }
        </div>
    );
};

export default SideNav;