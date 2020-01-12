import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Badge, Container
} from 'reactstrap';

class Education extends Component {
  render() {

    return (
      <div className="row education justify-content-center">
              <div id="education"> <h1 className="text-center mx-auto my-5">My Education</h1></div>
      <Container>
      <Row xs="1" sm="2" md="3" lg="4">
    <Col>
    <Card body outline color="primary" className="mx-auto my-2">
      <CardImg top width="318px" height="auto" src="images/logo/emblem.svg" alt="slc marksheet image" />
      <CardBody>
        <CardTitle className="text-danger">SLC Sent-up</CardTitle>
        <CardSubtitle>2006</CardSubtitle>
        <CardText>“Learn as much as you can while you are young, since life becomes too busy later”- Dana Stewart Scott.</CardText>
        <Badge href="https://drive.google.com/open?id=0B3lpzqmId7sSV0lDeEJyR1ZGVnc" target="_blank" color="secondary">View Marks</Badge>
      </CardBody>
      </Card>
    </Col>

    <Col>
    <Card body outline color="success" className="mx-auto my-2">
      <CardImg top width="100%" height="auto" src="images/logo/emblem.svg" alt="slc marksheet image" />
      <CardBody>
        <CardTitle className="text-danger">SLC Graduation</CardTitle>
        <CardSubtitle>2008</CardSubtitle>
        <CardText>“Future belongs to those who believe in the beauty of their dreams"- Elenor Roosevelt.</CardText>
        <Badge href="https://drive.google.com/open?id=0B3lpzqmId7sSMkpKM01XNlFDUjQ" target="_blank" color="secondary">View Marks</Badge>
      </CardBody>
    </Card>
    </Col>

    <Col>
    <Card body outline color="danger" className="mx-auto my-2">
      <CardImg top width="100%" height="auto" src="images/logo/hseb.jpg" alt="slc marksheet image" />
      <CardBody>
        <CardTitle className="text-danger">+2 Level Graduation</CardTitle>
        <CardSubtitle>2011</CardSubtitle>
        <CardText>“Follow your passion. it will lead you to your purpose"- Oprah Winfrey.</CardText>
        <Badge href="https://drive.google.com/open?id=0B3lpzqmId7sSeWs1TmdXUFEzd2s" target="_blank" color="secondary">View Marks</Badge>
      </CardBody>
    </Card>
    </Col>

    <Col>
    <Card body outline color="secondary" className="mx-auto my-2" >
      <CardImg top width="100%" height="auto" src="images/logo/bangalore.jpg" alt="slc marksheet image" />
      <CardBody>
        <CardTitle className="text-danger">University Graduation</CardTitle>
        <CardSubtitle>2019</CardSubtitle>
        <CardText>“Do not let what you cannot do. interfere with what you can do" <br />- John Wooden.</CardText>
        <Badge href="https://drive.google.com/open?id=13gBDYqU4bCAZhhr7rNTZI6lLQhmQo8M9" target="_blank" color="secondary">View Marks</Badge>
      </CardBody>
    </Card>
    </Col>
  </Row>
      </Container>
</div>

  );

  }
}



export default Education;
