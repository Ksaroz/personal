import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Touch extends Component {
  render() {

    return (
        <div className="container-fluid">
            <div className="row touch justify-content-center">
              <div>
                <div id="contacts" className="hob-row text-center my-5">
                    <h2 className="text-center my-5">Get In Touch</h2>
                    <h4>If you love <span className="garden">Gardening</span> as much as I do.</h4>
                    <p className="contact-message mx-5">Gardening is not very difficult. It involves preparing the soil, planting vegetables or flowers and paying attention to the garden. Many people make gardening their hobby and it is also a good form of exercise.</p>
                    <a href="https://www.facebook.com/kumarinursery/" target="_blank">Kumari Nursery</a><br />
                    <a href="https://www.facebook.com/imthegardener/" target="_blank">Imthegardener</a>

                  </div>
                  <div id="contacts" className="hob-row text-center my-5">

                      <h4>If you love <span className="garden">Pets</span> as much as I do.</h4>
                      <p className="contact-message mx-5">A pet is a domesticated animal that lives with people, but is not forced to work and is not eaten, in most instances. In most cases, a pet is kept to entertain people or for companionship</p>
                      <a href="https://www.snehacare.com/" target="_blank">Sneha Care</a><br />
                      <a href="http://www.streetdogcare.org/" target="_blank">Street Dog Care</a><br />
                      <a href="https://www.facebook.com/animalnepal.org/" target="_blank">Animal Nepal</a>

                    </div>
                    <div id="contacts" className="hob-row text-center my-5">

                        <h4>If you love <span className="garden">Kids</span> as much as I do.</h4>
                        <p className="contact-message mx-5">Foster care (also known as out-of-home care) is a temporary service provided by States for children who cannot live with their families. Children in foster care may live with relatives or with unrelated foster parents. Foster care can also refer to placement settings such as group homes, residential care facilities, emergency shelters, and supervised independent living.</p>
                        <a href="https://www.unicef.org/nepal/child-protection" target="_blank">Unicef Nepal</a><br />
                        <a href="https://www.nepalorphanshome.org/" target="_blank">Nepal Orphans Home</a>

                      </div>
                      <div id="contacts" className="hob-row text-center my-5">

                          <h4>This is <span className="last-intro">Saroj Kumar Shrestha</span>.</h4><br />
                          <h5>Haldibari-2, Jhapa, Nepal</h5>
                          <h5>+977-9816900475</h5>
                          <h5>+977-9807932335</h5>        

                        </div>

                    <div className="text-center"><button className="btn-cv my-2"><a href="" target="_blank">Contact Me</a></button></div>

                </div>
              </div>
  </div>
  );

  }
}



export default Touch;
