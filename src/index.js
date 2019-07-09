import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import './Css/Counters.css';
import { Provider } from 'react-redux';
import  store  from './store';
import rootReducer from './Reducers/rootReducer';
import CounterApp from './Components/CounterApp.js';

const node = document.getElementById("root");
render(
		<Provider store={store}>
			<CounterApp /> 
		</Provider>
		, node
	   );
