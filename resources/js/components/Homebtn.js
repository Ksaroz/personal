import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';

/** React components for scrolling back to the top of the page **/

class ScrollButton extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), "0");
    this.setState({ intervalId: intervalId });
  }



  render () {
      return <button title='Back to top' className='scroll'
               onClick={ () => { this.scrollToTop(); }}>
                <span><i className="fa fa-chevron-circle-up"></i></span>
              </button>;
   }
}





export default ScrollButton;
/*
 * Render the ScrollApp component into the div with the id 'app'
 */
