import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer'

let reducers = combineReducers({
    counter: counterReducer,
});


let store = createStore(reducers);



export default store