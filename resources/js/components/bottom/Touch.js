import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Touch extends Component {
  render() {

    return (
        <div className="container-fluid">
            <div className="row touch justify-content-center">

                <div className="contact-me text-center my-5">
                    <h2>Get In Touch</h2>
                    <h4>If you love <span className="garden">Gardening</span> as much as I do.</h4>
                    <p className="contact-message mx-5">Gardening is not very difficult. It involves preparing the soil, planting vegetables or flowers and paying attention to the garden. Many people make gardening their hobby and it is also a good form of exercise.</p>
                    <a className="btn" href="mailto:ksaroz1992@gmail.com">CONTACT ME</a>
                  </div>
                </div>
  </div>
  );

  }
}



export default Touch;
