import React from 'react';
import { Row, Col } from 'react-flexa'
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar'
import Form from '../Form'
import Table from '../Table'
import ClassComponent from '../ClassComponent'

const Container = () => {
    // Router - should include components using react-router-dom hooks
    // Route exact
    // <></> - function should return a single element

    const logoWidth = 100;

    return (
        <>
            <Header logoWidth={logoWidth} />

            <Row gutter='0px'>
                <Col xs={`${logoWidth}px`} gutter='0px'>
                    <Sidebar logoWidth={logoWidth} />
                </Col>

                <Col xs={`calc(100vw - ${logoWidth}px)`} gutter='0px'>
                    <Switch>
                        <Route 
                            exact 
                            path='/' 
                            component={() => { 
                                return <div style={{ margin: '40px' }}>Home</div> 
                            }} 
                        />
                        <Route exact path='/form/:id?' component={Form} />
                        <Route exact path='/table' component={Table} />
                        <Route 
                            exact 
                            path='/class-component' 
                            component={() => 
                                <ClassComponent 
                                    nutrient={{
                                        name: 'Nutrient 1', 
                                        elementalName: 'N', 
                                        ordinal: '8',
                                        defaultUnit: 'm' 
                                    }} 
                                />
                            } 
                        />
                    </Switch>
                </Col>
            </Row>
        </>
    );
}

export default Container;