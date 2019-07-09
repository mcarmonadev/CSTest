import React, { Component } from 'react'
import store from '../../store'
import { connect } from 'react-redux'

class CounterItem extends Component {
	constructor(props) {
		super(props);
    }

    selectThisCounter = (counter) => {
        this.props.updateSelectedCounter(counter)
    }    
    incThisCounter = (counter) => {
        this.props.incrementCounter(counter)
    }    
    decThisCounter = (counter) => {
        this.props.decrementCounter(counter)
    }   
    delThisCounter = (counter) => {
        this.props.deleteCounter(counter)
    }  

    render() {
        const counter = this.props.counter;
        let fileClasses = ["CounterItem"];if(this.props.idSelected===this.props.counter.id)fileClasses.push('CounterItem_selected');
        return(          
              <div className={fileClasses.join(' ')}   onClick={(e) => this.selectThisCounter(counter)} >
                <div className="CounterItemIco"><img src="/count.png" alt="{counter.title}" height="42" width="42"/>
                </div>
                <div className="CounterItemLabel">

                    <div className="CounterItemDetails">{counter.title}  (<font color='green' size='3'>{counter.count}</font>) 
                    </div>   
                    <div className="CounterItemActions">
                            <div className="CounterItemAction CounterItemAction_Inc"
                                onClick={(e) => this.incThisCounter(counter)} >Inc(+)</div>
                            <div className="CounterItemAction CounterItemAction_Dec"
                                onClick={(e) => this.decThisCounter(counter)} >Dec(-)</div>
                            <div className="CounterItemAction CounterItemAction_Del"
                                onClick={(e) => this.delThisCounter(counter)} >Delete</div>
                    </div>  
                    
                </div>     
              </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        idSelected: (state.storedCounters.idSelectedCounter)
    }
}

export default connect(mapStateToProps)(CounterItem)