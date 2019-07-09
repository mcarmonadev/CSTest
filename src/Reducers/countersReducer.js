import { LOAD_COUNTERS, SELECT_COUNTER, REFRESH_COUNTER, ADD_COUNTER, TOGGLE_HEADER, SET_FILTER } from '../Actions/actionTypes'

const initialState = {
  counterElements: [],
  idSelectedCounter: '',
  headersSorting:{headerType:'Title',order:'ASC'},
  filterSettings: {titleFilter:'',fromFilter:NaN, toFilter:NaN},
  summaryFoundCounters: {total:0,sum:0}
};


function countersReducer(state =  initialState, action) 
{
    switch(action.type) {
        case LOAD_COUNTERS:
            return {  ...state,
                      counterElements: action.counterElements,
                      idSelectedCounter: (!state.idSelectedCounter&&action.counterElements.length>0)?action.counterElements[0].id:'' ,
                      summaryFoundCounters: { total:action.counterElements.length,
                                              sum:action.counterElements.reduce(function(prevVal, currObj){return prevVal + currObj.count;}, 0)
                                            }
                    };
        case SELECT_COUNTER:
            return {  ...state,
                      counterElements: state.counterElements,
                      idSelectedCounter: action.idSelectedCounter
                    };
        case REFRESH_COUNTER:
            var refreshedCounter = action.refreshedCounter;
            var refreshedCounters = 
                state.counterElements.map(counter => (counter.id === refreshedCounter.id) 
                                                      ? {...counter, count: refreshedCounter.count}
                                                      //? {...counter, count: refreshedCounter.count}
                                                      : counter);
            return {  ...state,
                      counterElements: refreshedCounters,
                      idSelectedCounter: state.idSelectedCounter,
                      summaryFoundCounters: { total:refreshedCounters.length,
                                              sum:refreshedCounters.reduce(function(prevVal, currObj){return prevVal + currObj.count;}, 0)
                                            }                      
                    };
        case ADD_COUNTER:
            return {
                      ...state,
                      counterElements: [...state.counterElements, action.newCounter],
                      idSelectedCounter: action.newCounter.id,
                      summaryFoundCounters: { total:state.counterElements.length+1,
                                              sum:state.counterElements.reduce(function(prevVal, currObj){return prevVal + currObj.count;}, 0)
                                            }      
                    };

        case TOGGLE_HEADER:
            var order = state.headersSorting.order;//detalle menor: si el campo sorter 
            //cambio, entonces se mantiene el mismo sentido de sorting.
            //pero si fué el mismo campo, entonces se togglea el sentido sorting
            if(action.headerType===state.headersSorting.headerType){
                order = (state.headersSorting.order==='ASC')?'DESC':'ASC';
            }
            return {
                      ...state,
                      headersSorting: {headerType:action.headerType,order:order}
                    };

        case SET_FILTER:
            return {
                      ...state,
                      filterSettings: action.filterSettings
                    };
        default:
            return state;    
    }
}
export default countersReducer

