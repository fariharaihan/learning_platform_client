import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectSummaryCard from '../Shared/SubjectSummaryCard/SubjectSummaryCard';

const Category = () => {
    const subjects = useLoaderData()
    return (
        <div>
            <h3>This is category:{subjects.length}</h3>
            {
                subjects.map(subject => <SubjectSummaryCard
                    key={subject.id}
                    subject={subject}
                ></SubjectSummaryCard>)
            }
            {/* <SubjectSummaryCard></SubjectSummaryCard> */}
        </div>
    );
};

export default Category;

