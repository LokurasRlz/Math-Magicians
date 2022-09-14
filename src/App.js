/** @format */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quote';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <main className="container">
          <header>
            <div className="title">
              <h1><a href="/">Math Magicians</a></h1>
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/Calculator">Calculator</Link>
              <Link to="/Quote">Quote</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quotes />} />
          </Routes>
        </main>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
      </Router>
    );
  }
}
