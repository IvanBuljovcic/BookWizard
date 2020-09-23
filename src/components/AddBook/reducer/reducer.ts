// Action types
import actionTypes from './actionTypes';

// Typings
import { IState } from './reducer.types';

const initialState: IState = {
  genre: null,
  subgenre: null,
  step: 0,
};

const resetState = () => {
  return { ...initialState };
};

const setGenre = (state: IState, action: any) => {
  return {
    ...state,
    genre: action.payload,
  };
};

const setSubGenre = (state: IState, action: any) => {
  return {
    ...state,
    subgenre: action.payload,
  };
};

const setStep = (state: IState, action: any) => {
  return {
    ...state,
    step: action.payload,
  };
};

const addBookReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_MAIN_GENRE:
      return setGenre(state, action);

    case actionTypes.SET_SUB_GENRE:
      return setSubGenre(state, action);

    case actionTypes.SET_STEP:
      return setStep(state, action);

    case actionTypes.RESET_ALL:
      return resetState;

    default:
      return state;
  }
};

export { addBookReducer, initialState };
