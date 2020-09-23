import { IGenre, ISubGenre } from '../../GenreList/GenreList.types';
import actionTypes from './actionTypes';

export const setStep = (dispatch: any, step: number) => {
  dispatch({ type: actionTypes.SET_STEP, payload: step });
};

export const setGenre = (dispatch: any, genre: IGenre) => {
  dispatch({ type: actionTypes.SET_MAIN_GENRE, payload: genre });
};

export const setSubGenre = (dispatch: any, genre: ISubGenre) => {
  dispatch({ type: actionTypes.SET_SUB_GENRE, payload: genre });
};

export const resetState = (dispatch: any) => {
  dispatch({ type: actionTypes.RESET_ALL });
};
