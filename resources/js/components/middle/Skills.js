import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col,
  Badge, Container, ListGroup, ListGroupItem
} from 'reactstrap';

class Skills extends Component {
  render() {

    return (


                <div id="skills"> <h1 className="text-center mx-auto my-5">My Skills</h1>


            <Container>
            <Row>
                <Col>
                <Card>
                   <CardImg top width="100%" height="auto" src="images/front.png" alt="Card image cap" />
                   <CardBody>
                     <CardTitle className="text-danger">Web Designing</CardTitle>
                     <ListGroup>
                      <ListGroupItem>HTML5</ListGroupItem>
                      <ListGroupItem>CSS3</ListGroupItem>
                      <ListGroupItem>JAVASCRIPT(ES6)</ListGroupItem>
                      <ListGroupItem>REACT.JS</ListGroupItem>
                      <ListGroupItem>BOOTSTRAP</ListGroupItem>
                      <ListGroupItem>JQUERY</ListGroupItem>
                      <ListGroupItem>AJAX</ListGroupItem>
                      <ListGroupItem>REACTSTRAP</ListGroupItem>
                    </ListGroup>
                   </CardBody>
                 </Card>
                </Col>
                <Col>
                <Card>
                   <CardImg top width="100%" height="auto" src="images/skill.png" alt="Card image cap" />
                   <CardBody>
                     <CardTitle className="text-danger">Web Development</CardTitle>
                     <ListGroup>
                      <ListGroupItem>PHP(7.0)</ListGroupItem>
                      <ListGroupItem>MySQL</ListGroupItem>
                      <ListGroupItem>LARAVEL(6)</ListGroupItem>
                      <ListGroupItem>RESTAPI</ListGroupItem>
                      <ListGroupItem>GIT & GITHUB</ListGroupItem>
                      <ListGroupItem>CHROME-DEBUGGER</ListGroupItem>
                    </ListGroup>
                   </CardBody>
                 </Card>
                </Col>
                <Col>
                <Card>
                   <CardImg top width="100%" height="auto" src="images/comlogo.png" alt="Card image cap" />
                   <CardBody>
                     <CardTitle className="text-danger">OTHER COMPUTER SKILLS</CardTitle>
                     <ListGroup>
                      <ListGroupItem>PHOTOSHOP(CC)</ListGroupItem>
                      <ListGroupItem>CORELDRAW</ListGroupItem>
                      <ListGroupItem>GRASS VALLEY(EDIUS)</ListGroupItem>
                      <ListGroupItem>MICROSOFT OFFICE</ListGroupItem>
                      <ListGroupItem>PROFICIENT TYPING</ListGroupItem>
                      <ListGroupItem>COMPUTER REPAIRING</ListGroupItem>
                      <ListGroupItem>AND OTHERS</ListGroupItem>
                    </ListGroup>
                   </CardBody>
                 </Card>
                </Col>
                <Col>
                <Card>
                   <CardImg top width="100%" height="auto" src="images/personal.png" alt="Card image cap" />
                   <CardBody>
                     <CardTitle className="text-danger">PERSONAL SKILLS</CardTitle>
                     <ListGroup>
                      <ListGroupItem>PLAYING FOOTBALL</ListGroupItem>
                      <ListGroupItem>COOKING</ListGroupItem>
                      <ListGroupItem>RACING BIKES</ListGroupItem>
                      <ListGroupItem>GARDENING FLOWERS</ListGroupItem>
                      <ListGroupItem>TEACHING</ListGroupItem>
                    </ListGroup>
                   </CardBody>
                 </Card>
                </Col>
            </Row>
            </Container>

  </div>
  );

  }
}



export default Skills;
