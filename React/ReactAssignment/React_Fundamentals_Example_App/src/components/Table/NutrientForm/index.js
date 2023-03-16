import React, { useState } from 'react';
import { Row, Col } from 'react-flexa'
import { StyledInput } from '../../../styles/app.css'
import ActionButtons from '../../shared/ActionButtons'

const NutrientForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [elementalName, setElementalName] = useState('');
    const [ordinal, setOrdinal] = useState('');
    const [defaultUnit, setDefaultUnit] = useState('');

    return (
        <Row style={{ marginTop: '40px'}}>
            <Col xs={12}>
                Add Nutrient
                <Row style={{ marginTop: '24px', marginBottom: '24px'}}>
                    <Col xs={1}>
                        Crop name
                        <StyledInput 
                            value={name} 
                            onChange={(evt) => { setName(evt.target.value) }} 
                        />
                    </Col>
                    <Col xs={1}>
                        Elemental Name
                        <StyledInput 
                            value={elementalName} 
                            onChange={(evt) => { setElementalName(evt.target.value) }} 
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px'}}>
                    <Col xs={1}>
                        Ordinal
                        <StyledInput 
                            value={ordinal} 
                            onChange={(evt) => { setOrdinal(evt.target.value) }} 
                        />
                    </Col>
                    <Col xs={1}>
                        Default Unit
                        <StyledInput 
                            value={defaultUnit} 
                            onChange={(evt) => { setDefaultUnit(evt.target.value) }} 
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px'}}>
                    <Col xs={1}></Col>
                    <Col xs={1} display='flex' style={{justifyContent: 'flex-end'}}>
                        <ActionButtons 
                            showCancel={false} 
                            showSave={true}
                            onSaveClick={() => {
                                onSubmit({
                                    name: name, 
                                    elementalName: elementalName, 
                                    ordinal: ordinal, 
                                    defaultUnit: defaultUnit
                                });
                            }} 
                        />
                    </Col>
                </Row>
            </Col> 
        </Row>
    );
}

export default NutrientForm;