import {createStore} from 'redux';
import reducers from './reducers';
import middlewares, {run} from './middlewares';

const initialState = {};

const store = createStore(reducers, initialState, middlewares);
//create store  and conect sagas
run();

export default store;
