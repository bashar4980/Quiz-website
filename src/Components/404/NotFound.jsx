import React from 'react';
import { Col, Container , Row} from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='text-center mt-5'>
                    <h2><span className='text-danger'>Sorry!</span> This page is not Found...</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;