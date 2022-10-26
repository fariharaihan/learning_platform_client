import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    <h4>Welcome to Career Hunt</h4>
                    <p>You can easily build your career with us. We always provide best service for our students.</p>
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="https://img.freepik.com/free-photo/computer-screens-running-programming-code-empty-software-developing-agency-office-computers-parsing-data-algorithms-background-neural-network-servers-cloud-computing-data-room_482257-33353.jpg?w=826&t=st=1666806159~exp=1666806759~hmac=b68fb7586f46c2820a66bae9c81603d6f9754bace33834fd98c1bb5201bfb153" />
        </Card>
    );
};

export default Home;