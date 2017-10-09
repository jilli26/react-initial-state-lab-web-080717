import React from 'react';
import ReactDOM from 'react-dom';

class ImageSlider extends React.Component {

  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div className="imageSlider">
        <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    )
  }
}

export default ImageSlider
