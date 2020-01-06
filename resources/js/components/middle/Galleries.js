import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Galleries extends Component {
  render() {

    return (
        <div className="container">
        <div className="row gallery justify-content-center">
                <div id="galleries"> <h1 className="text-center mt-5">Galleries...</h1></div>


      <div className="box mx-auto my-5">
    <div className="cardbox col-sm">
      <div className="imgBx">
          <a href="https://drive.google.com/open?id=13T_20r26jU3_D6ciDWFhVpFrgP-DdbJs" target="_blank"><img src="images/self/self.jpg" alt="self-images" /></a>
      </div>
      <div className="details">
          <h2>me, myself & family<br /><span>Kshresthasan</span></h2>
      </div>
    </div>

     <div className="cardbox col-sm">
       <div className="imgBx">
          <a href="https://drive.google.com/open?id=1zfSlXKfw8FKYDppGl5mnsHlEUmDjVZDo" target="_blank"><img src="images/self/graduation.jpg" alt="graduation-images" /></a>
       </div>
       <div className="details">
          <h2>Graduation Day<br /><span>Bangalore University</span></h2>
        </div>
     </div>

     <div className="cardbox col-sm">
       <div className="imgBx">
          <a href="https://drive.google.com/open?id=1V1ZT8TlHlFJuGxGGAmnPh-FGQ6iN1qSk" target="_blank"><img src="images/self/fun.jpg" alt="fun-images" /></a>
       </div>
       <div className="details">
          <h2>Friends & Fun<br /><span>Forever fun</span></h2>
        </div>
     </div>

</div>

                <div className="text-center"><button className="btn-cv my-2"><a href="https://drive.google.com/open?id=1yidEOhDxGZs8iu8dNi_bFu_mHzkxCWkw" target="_blank">See All </a></button>



  </div>
  </div>
</div>

  );

  }
}



export default Galleries;
