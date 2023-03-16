import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexa'
import { StyledTable } from '../style.css'

const NutrientTable = ({ nutrients }) => {
    return (
        <Row>
            <Col xs={24}>
                Nutrients
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Elemental Name</th>
                            <th>Ordinal</th>
                            <th>Default Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrients.map((item) => (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.elementalName}</td>
                                <td>{item.ordinal}</td>
                                <td>{item.defaultUnit}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </Col>
        </Row>
    );
}

export default NutrientTable;