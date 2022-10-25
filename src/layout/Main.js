import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <h3>Right side navbar</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;