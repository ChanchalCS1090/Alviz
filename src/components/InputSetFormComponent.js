import React from 'react';
import { Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';

class InputSetFormComponent extends React.Component {

    constructor(props) {

        super(props);
        this.state = { inputSet: this.props.array }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({ inputSet: event.target.value }, () => {
            if (this.validate(this.state.inputSet) === '') 
            this.props.parentStateSetter(typeof(this.state.inputSet) === 'string' ? this.state.inputSet.split(',').map(Number) : this.state.inputSet);
        });
    }

    validate(inputSet) {

        let nan = false;
        let nums = typeof(inputSet) === 'string' ? inputSet.split(',') : inputSet;
        for (let i = 0; i < nums.length; i++) if (nums[i] !== '' && isNaN(parseInt(nums[i]))) nan = true;
        if (nan) return 'Please Provide a valid input i.e. only numbers!';
        return '';
    }

    render() {

        const err = this.validate(this.state.inputSet);
        return (

            <Form>
                <FormGroup>
                    <Label for="inputSet">Enter the comma separated Array of numbers: </Label>
                    <Input
                        type="text"
                        name="inputSet"
                        id="inputSet"
                        value={this.state.inputSet}
                        valid={err === ''}
                        invalid={err !== ''}
                        onChange={this.handleInputChange}
                    />
                    <FormFeedback>{err}</FormFeedback>
                </FormGroup>
            </Form>
        );
    }
}

export default InputSetFormComponent;