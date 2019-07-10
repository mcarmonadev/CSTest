import React, { Component } from "react";
import { connect } from 'react-redux'
import { toggleHeader } from '../../Actions/actionCreators'


class CouterHeader extends Component {

	constructor(props) {
        super(props);
	}
    onClickHeader = () => {
		this.props.dispatch(toggleHeader(this.props.headerType));
    }    
	render() {		
        let headerClasses = ['CountersListHeader'];
        if(this.props.headerType==='Title')
        {headerClasses.push('CountersListHeader_Title');}
    	else
        {headerClasses.push('CountersListHeader_Count');}

    	let settings = this.props.sortingState;
    	let imageSorting;
    	if(this.props.headerType===settings.headerType){
    		if(settings.order==='ASC'){
    			imageSorting = <img src="/img/greenarrowup.png" alt="orden ascendente" height="12" width="12"/>;    			
    		}else{
    			imageSorting = <img src="/img/greenarrowdown.png" alt="orden descendente" height="12" width="12"/>;    			
    		}
    	}
		return (
		  <div className={headerClasses.join(' ')} onClick={(e) => this.onClickHeader()}>	
        	 {this.props.headerType} &nbsp;
        	 {imageSorting}
        	 
		  </div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		sortingState: state.storedCounters.headersSorting
	}
}
export default connect(mapStateToProps)(CouterHeader)
