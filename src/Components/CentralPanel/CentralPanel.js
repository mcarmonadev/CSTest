import React, { Component } from "react";
import { addCounter, setCountersFilter } from '../../Actions/actionCreators'
import CounterEditor from './CounterEditor'
import axios from 'axios'
import { connect } from 'react-redux'
import FilterPanel from './FilterPanel'

class CentralPanel extends Component {

	constructor(props) {
    	super(props);
	}
	
	addNewCounter = (counterTitle) => {
		axios.post('/api/v1/counter', {"title": counterTitle}, {headers: {'Content-Type': 'application/json'}})
		.then(response => {
			/*console.log('axios response');
			console.log(response.data);*/
	  		this.props.dispatch(addCounter(response.data));;
		})
		.catch(error => console.log(error))
	}
	onUpdateFilterSettings = (settings) => {
	  	this.props.dispatch(setCountersFilter(settings));;
	}

	render() {
		return (
		  <div className="CentralContainer">	
		  	<CounterEditor   onAddNewCounter={this.addNewCounter} />
		  	<FilterPanel 
		  			summaryFoundCounters={this.props.summaryFoundCounters}
		  			onUpdateFilterSettings={this.onUpdateFilterSettings}/>
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		summaryFoundCounters: state.storedCounters.summaryFoundCounters
	}
}
export default connect(mapStateToProps)(CentralPanel)