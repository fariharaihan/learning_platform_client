import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import DetailsCard from '../Shared/DetailsCard/DetailsCard';
import SideNav from '../Shared/SideNav/SideNav';

const CourseDetails = () => {
    const subjects = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="8">
                        {
                            subjects.map(subject => <DetailsCard
                                key={subject.id}
                                subject={subject}
                            ></DetailsCard>)
                        }

                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default CourseDetails;


