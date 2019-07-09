import { LOAD_COUNTERS, SELECT_COUNTER, REFRESH_COUNTER, ADD_COUNTER, TOGGLE_HEADER , SET_FILTER } from '../Actions/actionTypes'

export function loadCounters(counters) {
       /* alert('Action Load Counters')
            console.log('Action Load Counters');
            console.log(counters);*/
  return { type: LOAD_COUNTERS, counterElements: counters }
}
export function updateSelectedCounter(idSelectedCounter) {
  return { type: SELECT_COUNTER, idSelectedCounter: idSelectedCounter }
}
export function refreshCounter(counter) {
  return { type: REFRESH_COUNTER, refreshedCounter: counter }
}

export function addCounter(newCounter) {
  return { type: ADD_COUNTER, newCounter: newCounter }
}

export function toggleHeader(headerType) {
  return { type: TOGGLE_HEADER, headerType: headerType }
}

export function setCountersFilter(settings) {
  return { type: SET_FILTER, filterSettings: settings }
}
