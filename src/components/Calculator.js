import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="calculator">
        <div className="display">{ next || operation || total || 0 }</div>
        <button type="button" onClick={this.clickHandler} className="gray">AC</button>
        <button type="button" onClick={this.clickHandler} className="gray">+/-</button>
        <button type="button" onClick={this.clickHandler} className="gray">%</button>
        <button type="button" onClick={this.clickHandler} className="orange">÷</button>
        <button type="button" onClick={this.clickHandler} className="gray">7</button>
        <button type="button" onClick={this.clickHandler} className="gray">8</button>
        <button type="button" onClick={this.clickHandler} className="gray">9</button>
        <button type="button" onClick={this.clickHandler} className="orange">x</button>
        <button type="button" onClick={this.clickHandler} className="gray">4</button>
        <button type="button" onClick={this.clickHandler} className="gray">5</button>
        <button type="button" onClick={this.clickHandler} className="gray">6</button>
        <button type="button" onClick={this.clickHandler} className="orange">-</button>
        <button type="button" onClick={this.clickHandler} className="gray">1</button>
        <button type="button" onClick={this.clickHandler} className="gray">2</button>
        <button type="button" onClick={this.clickHandler} className="gray">3</button>
        <button type="button" onClick={this.clickHandler} className="orange">+</button>
        <button type="button" onClick={this.clickHandler} className="gray zero">0</button>
        <button type="button" onClick={this.clickHandler} className="gray">.</button>
        <button type="button" onClick={this.clickHandler} className="orange">=</button>
      </div>
    );
  }
}
