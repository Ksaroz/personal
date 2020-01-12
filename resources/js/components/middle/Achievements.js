import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Badge, Container
} from 'reactstrap';

class Achievements extends Component {
  render() {

    return (

            <div id="achievements"><h1 className=" text-center mx-auto my-5">Achievements</h1>

                  <Container>
                  <Row xs="1" sm="2" md="2" lg="3">
                  <Col>
                  <Card body outline color="primary" className="mx-auto my-2">
                    <CardImg top width="50%" height="auto" src="images/award.jpg" alt="slc marksheet image" />
                    <CardBody className="text-center">
                      <h3><CardTitle>Man of the Match</CardTitle></h3>
                      <h4><CardSubtitle>2016</CardSubtitle></h4>
                      <CardText>“I have achieved the trophy of man of the match on Football, Organized by St.Hopkins College Bangalore.</CardText>

                    </CardBody>
                  </Card>
                  </Col>
                  <Col>
                  <Card body outline color="danger" className="mx-auto my-2">
                    <CardImg top width="50%" height="auto" src="images/trophy3.jpg" alt="slc marksheet image" />
                    <CardBody className="text-center">
                      <h3><CardTitle>Programmer of the Batch</CardTitle></h3>
                      <h4><CardSubtitle>2019</CardSubtitle></h4>
                      <CardText>“I have achieved the trophy of Programmer of the Batch in Web Development Competition among the batch of B.C.A 2016-17 at Bangalore University, Organized by St.Hopkins College in Bangalore.</CardText>

                    </CardBody>
                  </Card>
                  </Col>
                  <Col>
                  <Card body outline color="secondary" className="mx-auto my-2">
                    <CardImg top width="50%" height="auto" src="images/trophy3.jpg" alt="slc marksheet image" />
                    <CardBody className="text-center">
                      <h3><CardTitle>Best Project in the Batch</CardTitle></h3>
                      <h4><CardSubtitle>2019</CardSubtitle></h4>
                      <CardText>“My Project has been selected as the best project than my friend's project and achieved 100% scores on a lab examination of Web Development at St.Hopkins College in Bangalore.</CardText>

                    </CardBody>
                  </Card>
                  </Col>
                  </Row>
                  </Container>



  </div>



  );

  }
}



export default Achievements;
