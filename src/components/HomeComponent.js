import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import bubble from '../images/bubbleSort.png';
import insertion from '../images/insertionSort.png';
import selection from '../images/selectionSort.png';

class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <Container className="my-5">
                    <Row className="py-5">
                        <Col className="col-12 col-lg-4 mb-4">
                            <Card inverse style={{ backgroundColor: '#272727', borderColor: '#272727' }}>
                                <CardImg top width="100%" src={bubble} alt="Bubble Sort Image" />
                                <CardBody>
                                    <CardTitle tag="h5">Bubble Sort</CardTitle>
                                    <CardText>How does this naive algorithm works???</CardText>
                                    <Link to="/bubbleSort"><Button color="success">Let's see</Button></Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-12 col-lg-4 mb-4">
                            <Card inverse style={{ backgroundColor: '#272727', borderColor: '#272727' }}>
                                <CardImg top width="100%" src={insertion} alt="Insertion Sort Image" />
                                <CardBody>
                                    <CardTitle tag="h5">Inertion Sort</CardTitle>
                                    <CardText>Check out the working of this algorithm?</CardText>
                                    <Link to="/insertionSort"><Button color="success">Let's see</Button></Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-12 col-lg-4 mb-4">
                            <Card inverse style={{ backgroundColor: '#272727', borderColor: '#272727' }}>
                                <CardImg top width="100%" src={selection} alt="Selection Sort Image" />
                                <CardBody>
                                    <CardTitle tag="h5">Selection Sort</CardTitle>
                                    <CardText>How does a selection sort operate?</CardText>
                                    <Link to="/selectionSort"><Button color="success">Let's see</Button></Link>
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
