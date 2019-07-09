import React, { Component } from "react";
import CouterHeader from '../SideBar/CouterHeader';
import { connect } from 'react-redux'

class CountListHeaders extends Component {

	constructor(props) {
    	super(props);
	}
	render() {
		return (
		  <div className="CountersListHeaders">	
        	 <CouterHeader  headerType='Title'/>
        	 <CouterHeader headerType='Count'/>
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sortingState: state.storedCounters.headersSorting
	}
}

export default connect(mapStateToProps)(CountListHeaders)