import React from 'react';
import InputSetFormComponent from './InputSetFormComponent';
import { Container, Row, Col } from 'reactstrap';
import Dynamic from './bubbleSort/Dynamic';
import Static from './bubbleSort/Static';

class BubbleSortComponent extends React.Component {

    constructor(props) {

        super(props);
        this.state = { array: [10,9,8,7,6,5,4,3,2,1] };
        this.stateSetter = this.stateSetter.bind(this);
    }

    stateSetter(array) {
        this.setState({ array: array });
    }
    
    render() {

        return (

            <div>
                <Container className="my-5">
                    <Row>
                        <Col className="text-center m-2">
                            <h4>Bubble Sort</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputSetFormComponent array = { this.state.array } parentStateSetter = { this.stateSetter } />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Dynamic array = {this.state.array}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Static array = {this.state.array}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BubbleSortComponent;
