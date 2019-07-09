import React, { Component } from "react";
import BlockTitle   	from './BlockTitle.js';

class CounterEditor extends Component {

	constructor(props) {
    	super(props);
	    this.state = {
	      counterName: ''
	    };
    	this.handleFileNameChange   = this.handleFileNameChange.bind(this);
    	this.handleAddClick   		= this.handleAddClick.bind(this);
	}

	handleFileNameChange(event) {
		this.setState({
		  counterName: event.target.value
		});
	}

	handleAddClick(comment) {
		if(!this.state.counterName ){
			alert('Nombre Invalido');
		}else
		if(this.state.counterName.length>10 ){
			alert('Nombre excede 10 letras');
		}else{
			this.props.onAddNewCounter(this.state.counterName);
			this.setState({
			  counterName: ''
			});
		}
	}

	render() {
		return (
		  <div className="CounterEditor">	
		  	<BlockTitle title='Agregar Contador'/>
			  <div className="CounterEditor_Fields">

				  <div className="CounterEditor_Label_Title">
				  	Title:
				  </div>
				  <div className="CounterEditor_Input">
                    <input type="text" placeholder="Counter Name Here" maxLength="50"
				              onChange={this.handleFileNameChange}
             				  value={this.state.counterName}/>
				  </div>
				  <div className="CounterEditor_DivBtn">
				  <div onClick={this.handleAddClick} className="CounterEditor_Btn">INSERT</div>
				  </div>

			  </div>
		  </div>
		);
	}
}

export default CounterEditor;