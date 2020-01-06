import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Badge
} from 'reactstrap';

class Education extends Component {
  render() {

    return (
        <div className="container">
            <div className="row education justify-content-center">
                <div id="education"><h1 className="text-center mt-5">My Education</h1>
            <Row xs="4" className="mx-auto my-5">

              <Col xs="12" sm="3">
                  <Card body outline color="primary">
                    <CardImg top width="318px" height="180px" src="images/logo/emblem.svg" alt="slc marksheet image" />
                    <CardBody>
                      <CardTitle>SLC Sent-up</CardTitle>
                      <CardSubtitle>2006</CardSubtitle>
                      <CardText>“Learn as much as you can while you are young, since life becomes too busy later”- Dana Stewart Scott.</CardText>
                      <h2><Badge href="https://drive.google.com/open?id=0B3lpzqmId7sSV0lDeEJyR1ZGVnc" target="_blank" color="secondary">View Marks</Badge></h2>
                    </CardBody>
                  </Card>
                </Col>


                  <Col xs="12" sm="3">
                      <Card body outline color="success">
                        <CardImg top width="100%" height="180px" src="images/logo/emblem.svg" alt="slc marksheet image" />
                        <CardBody>
                          <CardTitle>SLC Graduation</CardTitle>
                          <CardSubtitle>2008</CardSubtitle>
                          <CardText>“Learn as much as you can while you are young, since life becomes too busy later”- Dana Stewart Scott.</CardText>
                          <h2><Badge href="https://drive.google.com/open?id=0B3lpzqmId7sSMkpKM01XNlFDUjQ" target="_blank" color="secondary">View Marks</Badge></h2>
                        </CardBody>
                      </Card>
                    </Col>


                      <Col xs="12" sm="3">
                          <Card body outline color="danger">
                            <CardImg top width="100%" height="180px" src="images/logo/hseb.jpg" alt="slc marksheet image" />
                            <CardBody>
                              <CardTitle>+2 Level Graduation</CardTitle>
                              <CardSubtitle>2011</CardSubtitle>
                              <CardText>“Learn as much as you can while you are young, since life becomes too busy later”- Dana Stewart Scott.</CardText>
                              <h2><Badge href="https://drive.google.com/open?id=0B3lpzqmId7sSeWs1TmdXUFEzd2s" target="_blank" color="secondary">View Marks</Badge></h2>
                            </CardBody>
                          </Card>
                        </Col>

                        <Col xs="12" sm="3">
                            <Card body outline color="secondary">
                              <CardImg top width="100%" height="180px" src="images/logo/bangalore.jpg" alt="slc marksheet image" />
                              <CardBody>
                                <CardTitle>University Graduation</CardTitle>
                                <CardSubtitle>2019</CardSubtitle>
                                <CardText>“Learn as much as you can while you are young, since life becomes too busy later”- Dana Stewart Scott.</CardText>
                                <h2><Badge href="https://drive.google.com/open?id=13gBDYqU4bCAZhhr7rNTZI6lLQhmQo8M9" target="_blank" color="secondary">View Marks</Badge></h2>
                              </CardBody>
                            </Card>
                          </Col>

              </Row>
                <div className="text-center"><button className="btn-cv my-2"><a href="https://drive.google.com/open?id=0B3lpzqmId7sSYWlVODFaV0oyLTA" target="_blank">View More </a></button></div>
              </div>
  </div>
  </div>
  );

  }
}



export default Education;
