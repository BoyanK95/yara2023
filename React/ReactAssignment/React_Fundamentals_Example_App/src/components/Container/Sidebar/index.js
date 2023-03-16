import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Row, Col} from 'react-flexa'
import { StyledImage } from '../../../styles/app.css'
import { StyledSidebarOption, StyledOptionLabel } from './style.css';

const Sidebar = ({ logoWidth }) => {
     // Render lists - key (not recommended to be index)

    const history = useHistory();

    const optionImageWidth = logoWidth/2;

    const menuOptions = [
        {label: 'Form', route: '/form'},
        {label: 'Table', route: '/table'},
        {label: 'Class component (example)', route: '/class-component'},
    ];

    const [options, setOptions] = useState(menuOptions);

    const handleOptionClick = (label) => {
        //setOptions( [{}, {},...] )

        setOptions((prev) => prev.map((item) => ({...item, background: item.label == label? '#E9EFF4': 'transparent'})));

        //setOptions(options.map((item) => ({...item, background: item.label == label? '#E9EFF4': 'transparent'}));

        //setOptions(options.map((item) => {}))
    }

    return (
        <Row 
            gutter='0px'
            style={{ background: 'white' }} 
        >
            <Col 
                xs={`${logoWidth}px`} 
                gutter='0px' 
                style={{ justifyContent: 'center', height: `calc(100vh - ${logoWidth}px)`}} 
            >
                {options.map((option) => (
                    <StyledSidebarOption 
                        key={option.label} 
                        onClick={() => { 
                            history.push(option.route); 
                            handleOptionClick(option.label);
                        }} 
                        background={option.background || 'transparent'}
                    >
                        <StyledImage 
                            src='src/assets/images/p-logo-transparent-2.png' 
                            width={`${optionImageWidth}px`} 
                            height={`${optionImageWidth}px`} 
                        />
                        <StyledOptionLabel>{option.label}</StyledOptionLabel>
                    </StyledSidebarOption>
                ))}
            </Col>
        </Row>
    );
}

export default Sidebar;