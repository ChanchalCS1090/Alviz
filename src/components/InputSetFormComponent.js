import React from 'react';
import { Form, FormGroup, Input, Button, Label  } from 'reactstrap';

class InputSetFormComponent extends React.Component {

    constructor(props) {

        super(props);
        this.state = { 
            inputSet: "10,9,8,7,6,5,4,3,2,1",
            speed: 5
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.props.parentStateSetter(this.state)
        event.preventDefault();
    }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label style={{ color: '#dddddd' }} for="inputSet">Enter the comma separated Array</Label>
                    <Input
                        style={{ borderColor: "#272727", backgroundColor: '#272727', color: '#dddddd' }}
                        type="text"
                        name="inputSet"
                        id="inputSet"
                        value={this.state.inputSet}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: '#dddddd' }} for="speed">Speed</Label>
                    <Input 
                        style={{ borderColor: "#272727", backgroundColor: '#272727', color: '#dddddd' }}
                        type="select" 
                        defaultValue="5" 
                        name="speed" 
                        id="speed" 
                        onChange={this.handleInputChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option value="5">5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button color="success" type="submit">Play</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default InputSetFormComponent;