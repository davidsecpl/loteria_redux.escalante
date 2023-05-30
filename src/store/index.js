import {createStore, combineReducers} from 'redux';
import { gameReducer } from './reducers/index';

const rootReducer = combineReducers({
    game: gameReducer
});

export default createStore(rootReducer);