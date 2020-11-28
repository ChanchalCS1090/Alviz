import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class Dynamic extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            array: this.props.array,
            colorArraySet: []
        }
        this.play = this.play.bind(this);
    }

    play(event) {
        for (var i = 0; i <= 100; i++) clearInterval(i);
        this.setState({ array: this.props.array }, () => {
            let speed = event.target.speed.value;
            let array = this.state.array;
            let len = array.length;
            let bigArray = [array.slice(0)];
            let colorArray = [];
            for (let cl = 0; cl < len; cl++) {
                if (cl === 0) colorArray.push(' rgb(170, 255, 195)');
                else if (cl === 1) colorArray.push(' rgb(220, 190, 255)');
                else colorArray.push('rgba(0, 0, 0, 0.1)');
            }
            let bigcolorArray = [colorArray.slice(0)];
            for (let cl = 0; cl < len && cl < 2; cl++) {
                if (cl === 0) colorArray[0] = 'rgba(0, 0, 0, 0.1)';
                else if (cl === 1) colorArray[0] = 'rgba(0, 0, 0, 0.1)';
            }
            for (let g = 0; g < len; g++) {

                for (let r = 0; r < len - 1 - g; r++) {

                    if (array[r] > array[r + 1]) {

                        let t = array[r];
                        array[r] = array[r + 1];
                        array[r + 1] = t;
                        colorArray[r + 1] = 'rgb(170, 255, 195)';
                        colorArray[r + 2] = 'rgb(220, 190, 255)';
                    }
                    bigArray.push(array.slice(0));
                    bigcolorArray.push(colorArray.slice(0));
                    colorArray = [];
                    for (let cl = 0; cl < len; cl++) {

                        colorArray.push('rgba(0, 0, 0, 0.1)');
                    }
                }
            }
            let counter = 0;
            if (speed < 6)
                setInterval(() => {
                    if (counter < bigArray.length) this.setState({ array: bigArray[counter], colorArraySet: bigcolorArray[counter++] });
                }, (6 - speed) * 1000);

            else
                setInterval(() => {
                    if (counter < bigArray.length) this.setState({ array: bigArray[counter], colorArraySet: bigcolorArray[counter++] });
                }, (11 - speed) * 100);
        });
        event.preventDefault();
    }

    render() {

        const data = {
            labels: this.state.array,
            datasets: [
                {
                    label: this.state.array.length + ' Elements',
                    data: this.state.array,
                    borderWidth: 1,
                    backgroundColor: this.state.colorArraySet
                },
            ]
        }

        const options = {
            animation: {
                duration: 0
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            }
        }

        return (
            <div>
                <Row>
                    <Col sm={{ size: 3 }}>
                        <Row>
                            <Col>
                                <Form onSubmit={this.play}>
                                    <FormGroup>
                                        <Label for="speed">Speed</Label>
                                        <Input type="select" name="speed" id="speed">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Input>
                                    </FormGroup>
                                    <Button type="submit">Play</Button>
                                    <Alert color="light" className="p-0">
                                        You can Double Click on Play Button to get a quick result (BETA!)
                                    </Alert>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={{ size: 8, offset: 1 }}>
                        <Bar data={data} options={options} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dynamic;
