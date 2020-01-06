import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Badge
} from 'reactstrap';

class Achievements extends Component {
  render() {

    return (
        <div className="container">
            <div id="achievements"><h1 className=" text-center mt-5">Achievements</h1>



            <Row xs="3" className="my-5">

              <Col xs="12" sm="4">
                  <Card body outline color="primary">
                    <CardImg top width="50%" height="auto" src="images/award.jpg" alt="slc marksheet image" />
                    <CardBody className="text-center">
                      <h3><CardTitle>Man of the Match</CardTitle></h3>
                      <h4><CardSubtitle>2016</CardSubtitle></h4>
                      <CardText>“I have achieved the trophy of man of the match on Football, Organized by St.Hopkins College Bangalore.</CardText>

                    </CardBody>
                  </Card>
                  </Col>
                  <Col xs="12" sm="4">
                      <Card body outline color="primary">
                        <CardImg top width="50%" height="auto" src="images/trophy3.jpg" alt="slc marksheet image" />
                        <CardBody className="text-center">
                          <h3><CardTitle>Programmer of the Batch</CardTitle></h3>
                          <h4><CardSubtitle>2019</CardSubtitle></h4>
                          <CardText>“I have achieved the trophy of Programmer of the Batch in Web Development Competition among the batch of B.C.A 2016-17 at Bangalore University, Organized by St.Hopkins College in Bangalore.</CardText>

                        </CardBody>
                      </Card>
                      </Col>
                      <Col xs="12" sm="4">
                          <Card body outline color="primary">
                            <CardImg top width="50%" height="auto" src="images/trophy3.jpg" alt="slc marksheet image" />
                            <CardBody className="text-center">
                              <h3><CardTitle>Best Project in the Batch</CardTitle></h3>
                              <h4><CardSubtitle>2019</CardSubtitle></h4>
                              <CardText>“My Project has been selected as the best project than my friend's project and achieved 100% scores on a lab examination of Web Development at St.Hopkins College in Bangalore.</CardText>

                            </CardBody>
                          </Card>
                          </Col>
                </Row>

  </div>
  </div>


  );

  }
}



export default Achievements;
