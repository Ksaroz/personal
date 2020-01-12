import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Homebtn from './Homebtn';
import Index from './Index';
import About from './middle/About';
import Skills from './middle/Skills';
import Hobbies from './middle/Hobbies';
import Education from './middle/Education';
import Achievements from './middle/Achievements';
import Galleries from './middle/Galleries';
import Touch from './bottom/Touch';
import Footer from './bottom/Footer';

class Example extends Component {
  render() {

    return (
      <div>
        <Homebtn />
        <Index />
        <About />
        <hr />
        <Skills />
        <hr />
        <Hobbies />
        <hr />
        <Education />
        <hr />
        <Achievements />
        <hr />
        <Galleries />
        <hr />
        <Touch />
        <Footer />
      </div>
  );

  }
}



export default Example;

ReactDOM.render(<Example />, document.getElementById('example'));
