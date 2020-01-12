import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
  render() {

    return (
        <div className="container-fluid">
            <div className="row about justify-content-center">
                <div>
                <div id="about"> <h1 className="text-center mt-5">About</h1>
    <img className="prof-img mx-auto d-block" src="images/me.jpg" alt="profile-image" />
    <div className="clear text-center mt-2"><h3>Hello.</h3>
    <p className="intro-mid text-center mt-3">I am a Web Designer & Developer. Completed My gruaduation from Bangalore University on the course of B.C.A. I love play football.</p>
    <p className="intro-mid text-center mt-3">Courteous and enthusiastic, I am interested in IT and everything in its orbit. I have been fascinated by web programming, e.g. developing apps and building websites. Since I joined college for my degree, I have learned the technical skills and programming languages during my college days and now I gained experience of working in this area.
    As this area complements my studies, I am keen to gain more experience in the field.
    </p>
		<button className="btn-cv my-5"><a href="https://drive.google.com/open?id=1WQu0H-3-Uy4lGRoTgUisSNLuGAaH1XcS" target="_blank">VIEW MY CV </a></button>
	</div>
  </div>
  </div>
  </div>
  </div>
  );

  }
}

export default About;
