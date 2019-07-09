import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadCounters, updateSelectedCounter, refreshCounter } from '../../Actions/actionCreators'
import CounterItem from './CounterItem'

class CountersList extends Component {

	getCounters() {
		axios.get('/api/v1/counters')
		.then(response => {
			this.props.dispatch(loadCounters(response.data));
		})
		.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getCounters();
	}

	updateSelectedCounter = (params) => {
	 this.props.dispatch(updateSelectedCounter(params.id));
	}

	incrementCounter = (params) => {
		axios.post('/api/v1/counter/inc', {"id": params.id}, {headers: {'Content-Type': 'application/json'}})
		.then(response => {
			/*alert('incrementado')
			console.log('axios response');
			console.log(response.data);*/
			this.props.dispatch(refreshCounter(response.data));
		})
		.catch(error => console.log(error))
	}
	decrementCounter = (params) => {
		axios.post('/api/v1/counter/dec', {"id": params.id}, {headers: {'Content-Type': 'application/json'}})
		.then(response => {
			this.props.dispatch(refreshCounter(response.data));
		})
		.catch(error => console.log(error))
	}
	deleteCounter = (params) => {
	    if (!confirm("¿Esta completamente seguro de querer eliminar?", "Delete file1")) { return; }
		axios.delete('/api/v1/counter', {"data":{"id": params.id}}, {headers: {'Content-Type': 'application/json'}})
		.then(response => {
	 		this.props.dispatch(updateSelectedCounter(''));
			this.getCounters();
		})
		.catch(error => console.log(error))
	}         								

	sortCounters = (countersList, sortingSettings) => {
            var elementos = countersList;
            if(sortingSettings.headerType=='Count'){
              if(sortingSettings.order=='ASC'){
                elementos.sort(function (a, b) {
                  return a.count - b.count;
                });
              }else{
                elementos.sort(function (a, b) {
                  return b.count - a.count;
                });
              }
            }else{
              if(sortingSettings.order=='ASC'){
                elementos.sort(function (a, b) {
                    if (a.title > b.title) {
                      return 1;
                    }
                    if (a.title < b.title) {
                      return -1;
                    }
                    return 0;
                });
              }else{
                elementos.sort(function (a, b) {
                    if (a.title > b.title) {
                      return -1;
                    }
                    if (a.title < b.title) {
                      return 1;
                    }
                    return 0;
                });
              }              
            }
            return elementos.slice();
	}

	//IGNORO POR QUE NO FUNCIONO FILTER, pese al SLICE
	filterCounters = (countersList, filterSettings) => {
		var retorno = []
		for(var i=0;i<countersList.length;i++){
			var agregar = true;
				if(filterSettings.titleFilter!==''){
					if(countersList[i].title.search(filterSettings.titleFilter)==-1){
						agregar=false;
					}
				}
				if(agregar){
					if(!isNaN(filterSettings.fromFilter)){
						if(countersList[i].count<filterSettings.fromFilter){
							agregar=false;
						}
					}
				}
				if(agregar){
					if(!isNaN(filterSettings.toFilter)){
						if(countersList[i].count>filterSettings.toFilter){
							agregar=false;
						}
					}
				}
				if(agregar){
					retorno.push(countersList[i]);					
				}
		}
        return retorno;
	}

  render() {
			let countersList = this.sortCounters(this.props.counters, this.props.sortingSettings);
			countersList = this.filterCounters(countersList, this.props.filteringSettings);               	
			return (
			  <div className="CountersList">
			        {countersList.map((counter) => {
			            return (                    	
			                <CounterItem 
			                		counter={counter} key={counter.id} id={counter.id}                          		
									updateSelectedCounter={this.updateSelectedCounter}                         		
									incrementCounter={this.incrementCounter}                     		
									decrementCounter={this.decrementCounter}                     		
									deleteCounter={this.deleteCounter} 
									/>
			            )
			        })}  
			  </div>
			)
  }
}

const mapStateToProps = (state) => {
	return {
		counters: state.storedCounters.counterElements,
		sortingSettings: state.storedCounters.headersSorting,
		filteringSettings: state.storedCounters.filterSettings
	}
}

export default connect(mapStateToProps)(CountersList)
