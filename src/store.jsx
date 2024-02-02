import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer.js'; // counter

const store = createStore(counterReducer);

export default store;