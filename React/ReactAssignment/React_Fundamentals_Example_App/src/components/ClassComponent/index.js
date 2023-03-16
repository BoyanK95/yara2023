import React from 'react';
import { Row, Col } from 'react-flexa'
import { StyledInput } from '../../styles/app.css'

class ClassComponent extends React.Component {
    // 1. static getDerivedStateFromProps(props, state)
    // 2. shouldComponentUpdate(nextProps, nextState)
    // 3. render()
    // 4. getSnapshotBeforeUpdate()
    // 5. componentDidUpdate(prevProps, prevState)

    constructor(props) {
        super(props);

        // Initialize state - what props the state should have and set default values
        this.state = {
            name: '',
            elementalName: '',
            ordinal: 0,
            defaultUnit: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        // Set the state based on the props
        
        return {
            name: props.nutrient.name,
            elementalName: props.nutrient.elementalName,
            ordinal: props.nutrient.ordinal,
            defaultUnit: props.nutrient.defaultUnit
        }
    }

    render() {
        console.log('props', this.props);

        
        
        return <Row style={{ margin: '40px'}}>
            <Col xs={12}>
                Nutrient
                <Row style={{ marginTop: '24px', marginBottom: '24px'}}>
                    <Col xs={1}>
                        Crop name
                        <StyledInput 
                            value={this.state.name} 
                            onChange={(evt) => { this.setState({ name: evt.target.value }) }} 
                        />
                    </Col>
                    <Col xs={1}>
                        Elemental Name
                        <StyledInput 
                            value={this.state.elementalName} 
                            onChange={(evt) => { this.setState({ elementalName: evt.target.value }) }} 
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px'}}>
                    <Col xs={1}>
                        Ordinal
                        <StyledInput 
                            value={this.state.ordinal} 
                            onChange={(evt) => { this.setState({ ordinal: evt.target.value }) }} 
                        />
                    </Col>
                    <Col xs={1}>
                        Default Unit
                        <StyledInput 
                            value={this.state.defaultUnit} 
                            onChange={(evt) => { this.setState({ defaultUnit: evt.target.value }) }} 
                        />
                    </Col>
                </Row>
            </Col> 
        </Row>;
    }
}

export default ClassComponent;