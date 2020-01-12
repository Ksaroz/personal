import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';

class Index extends Component {
  render() {

    return (
        <div className="container-fluid">
            <div className="row top justify-content-center">
                <div>
                    <div id="introd">
                        <div className="intro pt-5 font-weight-bold text-center">I'm Saroj Kumar</div>

                        <div className="intro-prof font-weight-bold text-center">a <span><a href="https://en.wikipedia.org/wiki/World_Wide_Web" target="_blank">Web</a></span> Designer & Developer</div>
                        <a href="https://en.wikipedia.org/wiki/Batman" target="_blank"><img className="top-bat mx-auto d-block" src="images/bat.png" alt="batmanlogo" /></a>

  <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-5 mt-lg-5">
      <li className="nav-item">
      <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#hobbies">Hobbies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#achievements">Achievements</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#galleries">Galleries</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contacts">Contacts</a>
      </li>
    </ul>
  </div>
</nav>

<div className="follow text-center mx-auto my-5">
<a href="https://www.linkedin.com/in/kshresthasan/" target="_blank" className="mx-2" ><i className="fa fa-linkedin fa-2x"></i></a>
<a href="https://github.com/Ksaroz" target="_blank" className="mx-2" ><i className="fa fa-github-square fa-2x"></i></a>
<a href="https://www.facebook.com/Kshresthasan" target="_blank" className="mx-2" ><i className="fa fa-facebook fa-2x"></i></a>
<a href="https://www.instagram.com/kshresthasan/" target="_blank" className="mx-2" ><i className="fa fa-instagram fa-2x"></i></a>
<a href="https://twitter.com/Ksaroz_1992" target="_blank" className="mx-2" ><i className="fa fa-twitter-square fa-2x"></i></a>



</div>
    </div>
  </div>
  </div>
  </div>
  );

  }
}



export default Index;
