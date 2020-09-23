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
  genre?: IGenre | ISubGenre;
  handleNext?: (genre: any) => void; // Needs to be properly typed, maybe split into two functions that accept different parameter type
  handleAddNew?: () => void;
  handleBack?: () => void;
}
