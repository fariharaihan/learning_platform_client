import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../Shared/SideNav/SideNav';
import SubjectSummaryCard from '../Shared/SubjectSummaryCard/SubjectSummaryCard';

const Category = () => {
    const subjects = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="8">
                        <h3>Welcome to our special courses...</h3>
                        {
                            subjects.map(subject => <SubjectSummaryCard
                                key={subject.id}
                                subject={subject}
                            ></SubjectSummaryCard>)
                        }

                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Category;





