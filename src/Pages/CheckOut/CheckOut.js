import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CheckOut = () => {
    return (
        <div>
            <h3>Wecome...</h3>
            <div className='border p-5'>
                <Form className='w-75'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='mb-3' variant="primary" type="submit">
                        Pay your course fee.
                    </Button>

                    <br></br>
                    <Form.Text >
                        <h4> Thanks for stay with us.</h4>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;