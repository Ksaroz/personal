import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel2 from './Carousel2'

class Galleries extends Component {
  render() {

    return (
        <div className="container">

                <div id="galleries"> <h1 className="text-center mt-5">Galleries...</h1></div>


                  <Carousel2 />
        
                <div className="text-center"><button className="btn-cv my-2"><a href="">See All </a></button>



  </div>
  </div>


  );

  }
}



export default Galleries;
