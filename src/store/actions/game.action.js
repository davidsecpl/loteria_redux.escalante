import {gameTypes} from '../types';

const {SELECT_NUMBER} = gameTypes;

export const selectNumber = (value)=>({
    type: SELECT_NUMBER,
    number: value
});