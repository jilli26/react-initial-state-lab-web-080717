import React from 'react';
import ReactDOM from 'react-dom';

class Bomb extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {

    const x = this.state.secondsLeft === 0 ? "Boom!" :`${this.state.secondsLeft} seconds left before I go boom!`

    return (
      <div className="bomb">
        <p>{x}</p>
      </div>
    )
  }
}

export default Bomb
