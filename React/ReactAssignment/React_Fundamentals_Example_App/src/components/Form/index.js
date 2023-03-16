import React, { useState, useMemo } from 'react';
import { Row, Col } from 'react-flexa'
import { useParams } from 'react-router-dom';
import { StyledInput } from '../../styles/app.css'
import ActionButtons from '../shared/ActionButtons'

const Form = () => {
    const { id } = useParams();

    const [cropName, setCropName] = useState('');
    const [subClass, setSubClass] = useState('');
    const [yieldUnit, setYieldUnit] = useState('');
    const [seedingDate, setSeedingDate] = useState('');
    const [residueFactor, setResidueFactor] = useState(0);
    const [showSummary, setShowSummary] = useState(false);

    // Form state: formik
    // conditional rendering (checks with 0)
    // useMemo, useCallback - computed only when the dependency array changes


    const cropSummary = useMemo(() => {
        if(cropName && subClass && yieldUnit && seedingDate){
            return `My crop is ${cropName} with ${subClass} sub-class, ${yieldUnit} unit and ${seedingDate} date.`
        }

        return null;
    }, [cropName, subClass, yieldUnit, seedingDate]);

    console.log('id', id)

    return (
        <Row style={{ margin: '40px'}}>
            <Col xs={24}>
                Crop Details
                <Row style={{ marginTop: '24px', marginBottom: '24px'}}>
                    <Col xs={1}>
                        Crop name
                        <StyledInput 
                            value={cropName} 
                            onChange={(evt) => { setCropName(evt.target.value) }} 
                        />
                    </Col>
                    <Col xs={1}>
                        Sub-class
                        <StyledInput 
                            value={subClass} 
                            onChange={(evt) => { setSubClass(evt.target.value) }} 
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px'}}>
                    <Col xs={1}>
                        Yield unit
                        <StyledInput 
                            value={yieldUnit} 
                            onChange={(evt) => { setYieldUnit(evt.target.value) }} 
                        />
                    </Col>
                    <Col xs={1}>
                        Seeding date
                        <StyledInput 
                            value={seedingDate} 
                            onChange={(evt) => { setSeedingDate(evt.target.value) }} 
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px'}}>
                    <Col xs={1}>
                        Residue factor
                        <StyledInput 
                            value={residueFactor} 
                            onChange={(evt) => { setResidueFactor(evt.target.value) }} 
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px'}}>
                    <Col xs={1}></Col>
                    <Col xs={1} display='flex' style={{justifyContent: 'flex-end'}}>
                        <ActionButtons 
                            showCancel={true}
                            showSave={true} 
                            onCancelClick={() => {
                                setCropName('');
                                setSubClass('');
                                setYieldUnit('');
                                setSeedingDate('');
                                setResidueFactor(0);
                            }} 
                            onSaveClick={() => {
                                if(cropSummary){
                                    setShowSummary(true);
                                }
                            }} 
                        />
                    </Col>
                </Row>
                {residueFactor && <Row>
                    <Col>
                        <Row>
                            Crop summary
                        </Row>
                        <Row>
                            {cropSummary}
                        </Row>
                    </Col>
                </Row>}
            </Col> 
        </Row>
    );
}

export default Form;