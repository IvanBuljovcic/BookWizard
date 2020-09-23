import { IGenre, ISubGenre } from '../../GenreList/GenreList.types';
import actionTypes from './actionTypes';

export interface IState {
  genre: IGenre | null;
  subgenre: ISubGenre | null;
  step: number;
}

export interface IResetAction {
  type: typeof actionTypes.RESET_ALL;
}

export interface IGenreAction {
  type: typeof actionTypes.SET_MAIN_GENRE | typeof actionTypes.SET_SUB_GENRE;
  payload?: IGenre | ISubGenre;
}

export interface IStepAction {
  type: typeof actionTypes.SET_STEP;
  payload: number;
}
