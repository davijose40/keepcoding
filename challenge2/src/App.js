import React from 'react';
import './App.css';

const Footer = () => (
  <footer>
    <a href="/">mait to</a>
  </footer>
);

const App = () => (
  <div className="App">
    <ul>
      <li>
        <a className="active" href="/">Home</a>
      </li>
      <li>
        <a href="/project">Project</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <div className="container" />
    <h1>Hello from App.js</h1>
    <Footer />
  </div>
);

export default App;
