// Generated with util/create-component.js
export interface ISubGenre {
  id: number;
  isDescriptionRequired: boolean;
  name: string;
}

export interface IGenre {
  id: number;
  name: string;
  subgenres: ISubGenre[];
}

export interface IGenreListProps {
  addNewEnabled?: boolean;
  backDisabled?: boolean;
  genres: (IGenre | ISubGenre)[];
  handleNext?: (id: number) => void;
  handleAddNew?: () => void;
  handleBack?: () => void;
}
