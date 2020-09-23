import { IGenre, ISubGenre } from '../GenreList/GenreList.types';

// Generated with util/create-component.js
export interface INewSubgenreProps {
  parentGenre: IGenre;
  handleAfterSubmit: (subgenre: ISubGenre) => void;
}
