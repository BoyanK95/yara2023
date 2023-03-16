import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexa'
import { useGetNutrients } from './hooks'
import NutrientTable from './NutrientTable'
import NutrientForm from './NutrientForm'

const Table = () => {
    // Conditional rendering

    const [data, setData] = useState([]);
    const [shouldShowForm, setShouldShowForm] = useState(false);

    const { nutrients, loading } = useGetNutrients();

    useEffect(() => {
        if(!loading && nutrients){
            setData(nutrients);
        }
    }, [loading, nutrients])

    // console.log('render')
    // console.log('loading', loading)
    // console.log('nutrients', nutrients)
    // console.log('data', data)

    const handleOnSubmit = (nutrient) => {
        setData((prev) => [...prev, nutrient]);
        setShouldShowForm(false);
    }

    if(loading){
        return (
            <Row style={{ margin: '40px'}}>
                <Col xs={24}>Loading... </Col>
            </Row>
        );
    }

    return (
        <Row style={{ margin: '40px'}}>
            <Col xs={24}>
                <>
                    <NutrientTable nutrients={data} />
                   
                    <Row style={{ marginTop: '24px'}} >
                        <Col>
                            <button 
                                onClick={() => {
                                    setShouldShowForm(true);
                                }}
                            >Add nutrient</button>
                        </Col>
                    </Row>
                    {shouldShowForm && <NutrientForm onSubmit={handleOnSubmit} />}
                </>
            </Col>
        </Row>
    );
}

export default Table;