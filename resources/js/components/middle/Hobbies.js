import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hobbies extends Component {
  render() {

    return (
        <div className="container-fluid">
            <div className="row hobbies justify-content-center">

            <div id="hobbies">
            <h1 className="hob text-center my-5">My Hobbies.</h1>
            <p className="text-center my-2"> Hobby gives delight and helps in passing the leisure time. </p>
    <div className="hob-row">
      <img className="foot-img" src="images/footkick1.jpg" alt="soccer-image" />
      <h3>Playing Football</h3>
      <p className="skill-description-two"> Football is my favourite game among other sports and I usually play football while my leisure time.
        I even have achieved a best player trophy from my college :) .</p>
    </div>
    <div className="hob-row">
      <img className="foot-img" src="images/cooking.png" alt="soccer-image" />
      <h3>Cooking</h3>
      <p className="skill-description-two"> I am not a Chef but My other hobby is Cooking food ;). I love to try & cook different foods and serve to my friends & family
        which gives me a more encouragement if my food is delicious ;) .</p>
    </div>
    <div className="hob-row">
      <img className="foot-img" src="images/mv.png" alt="soccer-image" />
      <h3>Motor-Bikes</h3>
      <p className="skill-description-two">Motorcycling for some may be just a hobby but to some it is their passion!!

From my personal perspective, it is an amazing way of feeling “alive”. It brings out the adventurous side in us. :) .</p>
    </div>

    <div className="hob-row">
      <img className="foot-img" src="images/garden.png" alt="soccer-image" />
      <h3>Gardening</h3>
      <p className="skill-description-two"> The small garden in front of my house is the result of my favorite hobby, gardening. Gardening is my favorite hobby. I think, it is the best of all the hobbies which one can follow with a lot of amusement and benefit to health.</p>
    </div>

  </div>

  </div>
  </div>
  );

  }
}



export default Hobbies;
