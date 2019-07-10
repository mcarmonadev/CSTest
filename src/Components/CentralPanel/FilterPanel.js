import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadCounters, updateSelectedCounter, refreshCounter, addCounter, deleteCounter } from '../../Actions/actionCreators'
import BlockTitle   	from '../Commons/BlockTitle.js';

class FilterPanel extends Component {

	constructor(props) {
    	super(props);
	    this.state = {
	      titleFilter: '',
	      fromFilter: '',
	      toFilter: '',
	      applyTitleFilter: false,
	      applyFromFilter:false,
	      applyToFilter:false
	    };
    	this.handleTitleFilterChange   = this.handleTitleFilterChange.bind(this);
    	this.handleFromFilterChange   = this.handleFromFilterChange.bind(this);
    	this.handleToFilterChange   = this.handleToFilterChange.bind(this);
	}
	handleTitleFilterChange(event) {
		if(event.target.value.length>10){			
			this.setState({titleFilter: this.state.titleFilter});return;
		}
		this.setState({titleFilter: event.target.value});
	}
	handleFromFilterChange(event) {
		if(!this.isNumeric(event.target.value)){			
			this.setState({fromFilter: this.state.fromFilter});return;
		}
		this.setState({fromFilter: event.target.value});
	}
	handleToFilterChange(event) {
		if(!this.isNumeric(event.target.value)){			
			this.setState({toFilter: this.state.toFilter});return;
		}
		this.setState({toFilter: event.target.value});
	}
	isNumeric(value){
		  return (!isNaN(value))&&(!isNaN(value*1));  
	}
    applyTitleFilter = (e) => {
			this.setState({applyTitleFilter: e.target.checked});
    }
    applyFromFilter = (e) => {
			this.setState({applyFromFilter: e.target.checked});
    }
    applyToFilter = (e) => {
			this.setState({applyToFilter: e.target.checked});
    }
    updateFilterSettings = () => {    	
  		var filterSettings =  {titleFilter:'',fromFilter:NaN, toFilter:NaN}
  		if(this.state.applyTitleFilter){
  			filterSettings.titleFilter = this.state.titleFilter;
  		}
  		if(this.state.applyFromFilter){
  			filterSettings.fromFilter = (this.state.fromFilter==='')?NaN:this.state.fromFilter;
  		}
  		if(this.state.applyToFilter){
  			filterSettings.toFilter = (this.state.toFilter==='')?NaN:this.state.toFilter;
  		}
        this.props.onUpdateFilterSettings(filterSettings)
    }
	componentDidUpdate(prevProps,  prevState){
			this.updateFilterSettings();	
	}
	render() {
		return (
		  <div className="FilterPanel">	
		  	<BlockTitle title='Filtro Contadores'/>

			  <div className="FilterBy_Fields">
				  <div className="FilterBy_Label">
				  	Title:
				  </div>
				  <div className="FilterBy_Input">
                    <input type="text" placeholder="Counter Name Here" maxLength="50"
				              onChange={this.handleTitleFilterChange}
             				  value={this.state.titleFilter}/>
				  </div>
				  <div className="FilterBy_DivBtn">
     				  <input className="taskCheckbox" type="checkbox" 
                			 onChange={(e) => this.applyTitleFilter(e)} /> 
				  </div>
			  </div>	
			  <div className="FilterBy_Fields">
				  <div className="FilterBy_Label">
				  	Desde:
				  </div>
				  <div className="FilterBy_Input">
                    <input type="text" placeholder="From Value Filter" maxLength="50"
				              onChange={this.handleFromFilterChange}
             				  value={this.state.fromFilter}/>
				  </div>
				  <div className="FilterBy_DivBtn">
     				  <input className="taskCheckbox" type="checkbox" 
                			 onChange={(e) => this.applyFromFilter(e)} /> 
				  </div>
			  </div>
			  <div className="FilterBy_Fields">
				  <div className="FilterBy_Label">
				  	Hasta:
				  </div>
				  <div className="FilterBy_Input">
                    <input type="text" placeholder="To Value Filter" maxLength="50"
				              onChange={this.handleToFilterChange}
             				  value={this.state.toFilter}/>

				  </div>
				  <div className="FilterBy_DivBtn">				  		
     				  <input className="taskCheckbox" type="checkbox" 
                			 onChange={(e) => this.applyToFilter(e)} /> 
				  </div>
			  </div>

			  <div className="FilterBy_Fields">
				  <div className="FilterBy_Label_Center">
				  	<div className="FilterBy_Label_Font">Contadores registrados {this.props.summaryFoundCounters.total} &nbsp; - &nbsp; Sumatoria total &nbsp; {this.props.summaryFoundCounters.sum}</div>
				  </div>
			  </div>
		  </div>
		);
	}
}

export default FilterPanel;