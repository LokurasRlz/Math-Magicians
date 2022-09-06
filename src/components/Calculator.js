import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">0</div>
        <button type="button" className="gray">AC</button>
        <button type="button" className="gray">+/-</button>
        <button type="button" className="gray">%</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="gray">7</button>
        <button type="button" className="gray">8</button>
        <button type="button" className="gray">9</button>
        <button type="button" className="orange">X</button>
        <button type="button" className="gray">4</button>
        <button type="button" className="gray">5</button>
        <button type="button" className="gray">6</button>
        <button type="button" className="orange">-</button>
        <button type="button" className="gray">1</button>
        <button type="button" className="gray">2</button>
        <button type="button" className="gray">3</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="gray zero">0</button>
        <button type="button" className="gray">.</button>
        <button type="button" className="orange">=</button>
      </div>
    );
  }
}
