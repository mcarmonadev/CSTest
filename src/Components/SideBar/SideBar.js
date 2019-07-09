import React, { Component } from "react";
import CountersList from '../SideBar/CountersList';
import SideBarTitle   	from './SideBarTitle.js';
import CountListHeaders from './CountListHeaders.js';

class SideBar extends Component {

	constructor(props) {
    	super(props);
	}
	render() {
		return (
		  <div className="SideContainer">	
        	<SideBarTitle/>	    
        	<CountListHeaders/>	
        	<CountersList/>
		  </div>
		);
	}
}

export default SideBar;