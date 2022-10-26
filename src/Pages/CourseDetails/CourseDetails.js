import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../Shared/DetailsCard/DetailsCard';

const CourseDetails = () => {
    const subjects = useLoaderData()
    return (
        <div>
            {
                subjects.map(subject => <DetailsCard
                    key={subject.id}
                    subject={subject}
                ></DetailsCard>)

            }
        </div>
    );
};

export default CourseDetails;