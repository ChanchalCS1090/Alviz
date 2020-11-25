import React from 'react';
import InputSetFormComponent from './InputSetFormComponent';
import { Container, Row, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

class BubbleSortComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputSet: [],
            userInputSet: [],
            bigArraySet: [],
            colorArraySet: []
        }

        this.calculate = this.calculate.bind(this);
    }
    calculate(updatedState) {
        var array = updatedState.inputSet.split(',').map(Number);
        this.setState({inputSet: array, userInputSet: array});
        var len = array.length;
        var bigArray = [];
        var colorArray = [];
        for (var cl = 0; cl < len; cl++) {
            colorArray.push('rgba(0, 0, 0, 0.1)');
        }
        var bigcolorArray = [];
        for (var g = 0; g < len; g++){
            for (var r = 0; r < len - 1 - g; r++){
                if (array[r] > array[r + 1]) {
                    var t = array[r];
                    array[r] = array[r + 1];
                    array[r + 1] = t;
                    colorArray[r + 1] = 'rgba(128, 0, 0, 0.686)';
                    colorArray[r + 2] = 'rgb(128, 128, 0)';
                }
                bigArray.push(array.slice(0));
                bigcolorArray.push(colorArray.slice(0));
                colorArray = [];
                for (var cl = 0; cl < len; cl++) {
                    colorArray.push('rgba(0, 0, 0, 0.1)');
                }
            }
        }
        console.log(bigArray);
        var counter = 0;
        this.setState({bigArraySet: bigArray})
        setInterval(() => {
            if(counter < bigArray.length)
                this.setState({inputSet: bigArray[counter], colorArraySet: bigcolorArray[counter]});
            counter++;
        }, 3000);
    }
    render() {
        // var colordict = {};
        // var array = this.state.userInputSet;
        // var len = array.length;
        // for (var c = 0; c < len; c++) {
        //     colordict[array[c]] = c;
        // }
        // var rows = [];
        // var row = [];
        // for (var i = 0; i < len; i++) {
        //     for (var j = 0; j < len - i - 1; j++) {
        //         if (array[j] > array[j + 1]) {
        //             var temp = array[j];
        //             array[j] = array[j + 1];
        //             array[j + 1] = temp;
        //         }
        //     }
        //     row = [];
        //     for (var k = 0; k < array.length; k++) {
        //         if (k < 14)
        //             row.push(
        //                 <Col className={"border border-dark bgc-" + colordict[array[k]] + " text-white"}>{array[k]}</Col>
        //             );
        //         else
        //             row.push(
        //                 <Col className={"border border-dark bgc-" + colordict[array[k]] + " text-dark"}>{array[k]}</Col>
        //             );
        //     }
        //     rows.push(
        //         <Row className="my-3 border border-dark">
        //             {row}
        //         </Row>
        //     );
        // }
        //here
        const data = {
            labels: this.state.inputSet,
            datasets: [
                {
                    label: '# of Votes',
                    data: this.state.inputSet,
                    borderWidth: 1,
                    backgroundColor: this.state.colorArraySet
                },
            ],
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
                <InputSetFormComponent values={this.state.inputSet} calculate={this.calculate} />
                <Container>
                    <Row>
                        <Bar data={data} options={options} />
                    </Row>
                    {/* <Row>
                        <Col>{rows}</Col>
                    </Row> */}
                </Container>
            </div>
        );
    }
}

export default BubbleSortComponent;
