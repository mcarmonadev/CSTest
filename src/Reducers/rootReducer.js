import { combineReducers } from 'redux'
import countersReducer from './countersReducer'

const rootReducer = combineReducers({
    storedCounters: countersReducer
});
export default rootReducer;