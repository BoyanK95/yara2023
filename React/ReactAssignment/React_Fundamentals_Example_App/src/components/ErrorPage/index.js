import React from 'react';
import { Row, Col } from 'react-flexa';
import { StyledLabelL, StyledLabelM } from './style.css'

const ErrorPage = () => {
    return (
        <Row justifyContent='center' alignItems='center' style={{ height: '100%' }}>
            <Col>
                <Row justifyContent='center'>
                    <StyledLabelL>404</StyledLabelL>
                </Row>
                <Row justifyContent='center'>
                    <StyledLabelM>Sorry, page not found</StyledLabelM>
                </Row>
            </Col>
        </Row>
    );
};

export default ErrorPage;
