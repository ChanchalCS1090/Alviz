import React from 'react';
import { Button, Form, FormGroup, FormFeedback, Label, Input, Container, Row, Col } from 'reactstrap';

class InputSetFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputSet: this.props.values,
            touched: {
                inputSet: false
            }
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validate(inputSet) {
        var nan = false;
        var nums = typeof(inputSet) === 'string' ? inputSet.split(',') : inputSet;
        for (var i = 0; i < nums.length; i++) {
            if(nums[i] !== '' && isNaN(parseInt(nums[i]))) nan = true;
        }
        if (this.state.touched.inputSet && nums.length > 20)
            return 'Array size should not exceed 20!';
        else if (this.state.touched.inputSet && (nums.length === 1 && nums[0] === ''))
            return 'Please Enter something!';
        else if (nan)
            return 'Please Provide a valid input i.e. only numbers!';
        return '';
    }
    
    handleSubmit(event) {
        this.props.calculate(this.state);
        event.preventDefault();
    }
    render() {
        const err = this.validate(this.state.inputSet);
        return (
            <Form className="m-5" onSubmit={this.handleSubmit}>
                <Container>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Row>
                            <Col>
                                <Label for="inputSet" className="mr-sm-2">Enter the Array(length less than or equals to 20) with commas between each number: </Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    type="text"
                                    name="inputSet"
                                    id="inputSet"
                                    value={this.state.inputSet}
                                    valid={err === ''}
                                    invalid={err !== ''}
                                    onBlur={this.handleBlur('inputSet')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{err}</FormFeedback>
                            </Col>
                            <Col>
                                <Button>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Container>
            </Form>
        );
    }
}

export default InputSetFormComponent;