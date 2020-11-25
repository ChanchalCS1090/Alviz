import React from 'react';
import { Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Button, Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="px-5">
                    <h1 className="display-5">Hello, I am an Algorithm Visualization Tool...</h1>
                    <p className="lead">I will help you learn how actually a computer processes the algorithm which you provide to it for various purposes.</p>
                    <hr className="my-2" />
                    <p>Happy Visualizing...   :)</p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="#" alt="Bubble Sort Image" />
                                <CardBody>
                                    <CardTitle tag="h5">Bubble Sort</CardTitle>
                                    <CardText>How does this naive algorithm works???</CardText>
                                    <Link to="/bubbleSort"><Button>Check out Now!</Button></Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="#" alt="Insertion Sort Image" />
                                <CardBody>
                                    <CardTitle tag="h5">Insertion Sort</CardTitle>
                                    <CardText>How does this algorithm works???</CardText>
                                    <Link to="/insertionSort"><Button>Check out Now!</Button></Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="#" alt="Selection Sort Image" />
                                <CardBody>
                                    <CardTitle tag="h5">Selection Sort</CardTitle>
                                    <CardText>How does this algorithm works???</CardText>
                                    <Link to="/selectionSort"><Button>Check out Now!</Button></Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeComponent;
