import React from 'react';
import { Row, Col } from 'react-flexa'
import { useHistory } from 'react-router-dom';
import { StyledImage } from '../../../styles/app.css';
import { StyledHeader } from './style.css';

const Header = ({ logoWidth }) => {
    const history = useHistory();

    return (
        <Row gutter='0px'>
            <Col xs={`${logoWidth}px`} gutter='0px'>
                <StyledImage 
                    src='src/assets/images/logo_p.png' 
                    onClick={() => history.push('/')}
                    
                    cursor='pointer'
                    width={logoWidth}
                    height={logoWidth}
                />
            </Col>
            <Col xs={`calc(100vw - ${logoWidth}px)`} gutter='0px'>
                <StyledHeader/>
            </Col>
        </Row>
    );
}

export default Header;