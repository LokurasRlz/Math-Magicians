import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, SetState] = useState({});
  const clickHandler = (e) => {
    SetState(calculate(state, e.target.textContent));
  };
  const { next, operation, total } = state;
  return (
    <div className="calculator">
      <div className="display">{ next || operation || total || 0 }</div>
      <button type="button" onClick={clickHandler} className="gray">AC</button>
      <button type="button" onClick={clickHandler} className="gray">+/-</button>
      <button type="button" onClick={clickHandler} className="gray">%</button>
      <button type="button" onClick={clickHandler} className="orange">÷</button>
      <button type="button" onClick={clickHandler} className="gray">7</button>
      <button type="button" onClick={clickHandler} className="gray">8</button>
      <button type="button" onClick={clickHandler} className="gray">9</button>
      <button type="button" onClick={clickHandler} className="orange">x</button>
      <button type="button" onClick={clickHandler} className="gray">4</button>
      <button type="button" onClick={clickHandler} className="gray">5</button>
      <button type="button" onClick={clickHandler} className="gray">6</button>
      <button type="button" onClick={clickHandler} className="orange">-</button>
      <button type="button" onClick={clickHandler} className="gray">1</button>
      <button type="button" onClick={clickHandler} className="gray">2</button>
      <button type="button" onClick={clickHandler} className="gray">3</button>
      <button type="button" onClick={clickHandler} className="orange">+</button>
      <button type="button" onClick={clickHandler} className="gray zero">0</button>
      <button type="button" onClick={clickHandler} className="gray">.</button>
      <button type="button" onClick={clickHandler} className="orange">=</button>
    </div>
  );
};

export default Calculator;
