import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

//import './Css/Styles.css';
 
import CounterApp from './Components/CounterApp.js';

const node = document.getElementById("root");

render(<CounterApp />, node);
