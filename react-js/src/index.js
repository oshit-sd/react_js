import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.css";

// import App from './App';
const App = require('./App').default;

ReactDOM.render(<App title="Dev tools" />, document.getElementById("root"));