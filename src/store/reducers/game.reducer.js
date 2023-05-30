import { gameTypes } from '../types';

const { SELECT_NUMBER } = gameTypes;

const initialState = {
  jugada: [],
  selected: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NUMBER:
      state.jugada.push(action.number);
      return {
        ...state,
        selected: action.number,
      };
    default:
      return state;
  }
};

export default gameReducer;
