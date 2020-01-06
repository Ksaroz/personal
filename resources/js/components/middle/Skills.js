import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Skills extends Component {
  render() {

    return (
        <div className="container-fluid">
            <div className="row skills justify-content-center">
                <div>
                <div id="skills"> <h1 className="text-center mt-5">My Skills</h1>
                <h3 className="text-center mx-auto my-5 d-block">Web Development</h3>

      <div className="skill-row mx-auto float-left col-6">

      <img className="skill-img float-left mx-auto d-block" src="images/front.png"alt="web-image" />

      <div className="skill-description-one float-right">
				<span className="fend">Front-End</span>
				<div className="front-list">
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>JAVASCRIPT(ES6)</li>
						<li>JQUERY</li>
						<li>BOOTSTRAP</li>
						<li>AJAX</li>
						<li>PHOTOSHOP(CC)</li>
					</ul>
				</div>
        </div>
    </div>

    <div className="skill-row mx-auto float-right col-6">

    <img className="skill-img float-left mx-auto d-block" src="images/skill.png"alt="web-image" />

    <div className="skill-description-one float-right">
      <span className="fend">Back-End</span>
      <div className="front-list">
        <ul>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Laravel</li>
        <li>GIT, GITHUB</li>
        <li>RESTAPI</li>
        </ul>
      </div>
      </div>
  </div>



	</div>
  </div>
  </div>
  </div>
  );

  }
}



export default Skills;
