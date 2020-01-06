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
		<button className="btn-cv my-5"><a href="images/docs/cv.pdf" target="_blank">VIEW MY CV </a></button>
	</div>
  </div>
  </div>
  </div>
  </div>
  );

  }
}



export default About;
