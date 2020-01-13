import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Badge, Container
} from 'reactstrap';

class Footer extends Component {
  render() {

    return (
        <div className="container-fluid">

            <div className="footer justify-content-center">

            <div className="bottom-container text-center">

                <a className="footer-link mx-1" href="#about">About</a>
                <a className="footer-link mx-1" href="#skills">Skills</a>
                <a className="footer-link mx-1" href="#hobbies">Hobbies</a>
                <a className="footer-link mx-1" href="#education">Education</a>
                <a className="footer-link mx-1" href="#achievements">Achievements</a>
                <a className="footer-link mx-1" href="#galleries">Galleries</a>
                <a className="footer-link mx-1" href="#contacts">Contacts</a>

                <p className="copyright">© {(new Date().getFullYear())} Saroj Kumar Shrestha.</p>
              </div>



  </div>
  </div>
  );

  }
}



export default Footer;
