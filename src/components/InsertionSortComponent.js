import React from 'react';
import InputSetFormComponent from './InputSetFormComponent';
import { Container, Row, Col, Alert } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

class InsertionSortComponent extends React.Component {

    constructor(props) {

        super(props);
        let initialColor = [];
        for (let c = 0; c < 10; c++) initialColor.push('#b26fff');
        this.state = {
            array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            staticArray: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            speed: 5,
            color: initialColor
        };
        this.stateSetter = this.stateSetter.bind(this);
    }

    stateSetter(newState) {
        let initialColor = [];
        for (let c = 0; c < newState.inputSet.split(',').length; c++) initialColor.push('#b26fff');
        this.setState({
            array: newState.inputSet.split(',').map(Number),
            staticArray: newState.inputSet.split(',').map(Number),
            speed: newState.speed,
            color: initialColor
        }, () => {
            this.play();
        });
    }

    play() {
        for (var i = 0; i <= 100; i++) clearInterval(i);
        let speed = this.state.speed;
        let array = this.state.array.slice(0);
        let len = array.length;
        let bigArray = [array.slice(0)];
        let colorArray = [];
        for (let cl = 0; cl < len; cl++) {
            if (cl === 0) colorArray.push('#00fd4cd7');
            else colorArray.push('#b26fff');
        }
        let bigcolorArray = [colorArray.slice(0)];
        for (let cl = 0; cl < len && cl < 2; cl++) {
            if (cl === 0) colorArray[0] = '#b26fff';
            else if (cl === 1) colorArray[0] = '#b26fff';
        }
        for (let i = 1; i < len; i++) {

            let k = array[i];
            for (let j = i - 1; j >= 0 && k < array[j]; j--) {

                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
                colorArray[j] = '#00fd4cd7';
                bigArray.push(array.slice(0));
                bigcolorArray.push(colorArray.slice(0));
                colorArray = [];
                for (let cl = 0; cl < len; cl++) {

                    colorArray.push('#b26fff');
                }
            }
        }
        for (let c = 0; c < len; c++) colorArray.push('#b26fff');
        bigcolorArray.push(colorArray.slice(0));
        let counter = 0;
        let counter2 = 0;
        if (speed < 6)
            setInterval(() => {
                if (counter < bigcolorArray.length) this.setState({ color: bigcolorArray[counter++] });
                if (counter2 < bigArray.length) this.setState({ array: bigArray[counter2++]});
            }, (6 - speed) * 1000);

        else
            setInterval(() => {
                if (counter < bigcolorArray.length) this.setState({ color: bigcolorArray[counter++] });
                if (counter2 < bigArray.length) this.setState({ array: bigArray[counter2++]});
            }, (11 - speed) * 100);
    }

    render() {

        let rows = [];
        if (this.state.array.length <= 15) {
            let row = [];
            let array = this.state.staticArray.slice(0);
            let length = array.length;
            for (let cl = 0; cl < length; cl++) row.push(<Col key={cl*19-7-Math.random()*Math.random() + 1} className="p-2 bg-1 border border-dark">{array[cl]}</Col>);
            rows.push(<Row key={length*99-Math.random()-67*Math.random()*Math.random()} className="m-2 border border-dark">{row.slice(0)}</Row>)
            for (let i = 1; i < length; i++) {

                let k = array[i];
                row = [];
                for (let c = 0; c < length; c++) {
                    if (c === i) row.push(<Col key={i*c+Math.random()*Math.random() - i+c} className="p-2 border bgc-18 border-dark">{array[c]}</Col>);
                    else row.push(<Col key={i*c+Math.random() - i+c} className="p-2 border bg-1 border-dark">{array[c]}</Col>);
                }
                rows.push(<Row key={k*Math.random()*Math.random() + 1} className="m-2 border border-dark">{row.slice(0)}</Row>);
                for (let j = i - 1; j >= 0 && k < array[j]; j--) {

                    row = [];
                    let t = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = t;
                    for (let c = 0; c < length; c++) {
                        if (c === j) row.push(<Col key={i*Math.random()*Math.random()- j+c} className="p-2 border bgc-18 border-dark">{array[c]}</Col>);
                        else row.push(<Col key={i*j*Math.random()-Math.random() - i+j+c} className="p-2 border bg-1 border-dark">{array[c]}</Col>);
                    }
                    rows.push(<Row key={k*t-Math.random()+Math.random() + k+t} className="m-2 border border-dark">{row.slice(0)}</Row>);
                }
            }
        }
        else {
            rows = (<Alert color="dark">We can't render this section for more than 15 numbers</Alert>)
        }

        const data = {
            labels: this.state.array,
            datasets: [
                {
                    label: this.state.array.length + ' Elements',
                    data: this.state.array,
                    borderWidth: 1,
                    backgroundColor: this.state.color
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
                <Container className="my-5">
                    <Row>
                        <Col className="text-center m-2">
                            <h4 className="text-1">Insertion Sort</h4>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col className="mt-4">
                            <InputSetFormComponent parentStateSetter={this.stateSetter} />
                        </Col>
                        <Col sm={{ size: 8, offset: 1 }}>
                            <Bar data={data} options={options} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="m-5">
                            {rows}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default InsertionSortComponent;
