// Generated with util/create-component.js
import React, { useState } from 'react';

// Components
import * as S from './GenreListStyles';
import { Button } from 'antd';

// Typings
import { IGenre, IGenreListProps, ISubGenre } from './GenreList.types';
import AddBookFooter from '../AddBookFooter';

const GenreList: React.FC<IGenreListProps> = ({
  genres,
  addNewEnabled = false,
  backDisabled = false,
  handleNext = () => null,
  handleAddNew = () => null,
  handleBack = () => null,
}) => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>();
  const [addNewSelected, setAddNewSelected] = useState<boolean>(false);

  const handleGenreChange = (genreId: number) => {
    if (addNewEnabled) setAddNewSelected(false);

    setSelectedGenre(genreId);
  };

  const handleAddNewClick = () => {
    setAddNewSelected(true);
    setSelectedGenre(null);
  };

  const nextDisabled = () => {
    if (selectedGenre) return false;
    if (addNewSelected) return false;
    return true;
  };

  const handleNextClick = () => {
    if (addNewSelected) return handleAddNew();

    return handleNext(selectedGenre!);
  };

  return (
    <S.GenreList data-testid="GenreList">
      {genres && (
        <S.ListGrid>
          {genres.map((genre: IGenre | ISubGenre) => {
            if (genre.id === selectedGenre)
              return (
                <Button key={genre.id} type="primary">
                  {genre.name}
                </Button>
              );

            return (
              <Button key={genre.id} onClick={() => handleGenreChange(genre.id)}>
                {genre.name}
              </Button>
            );
          })}

          {addNewEnabled && (
            <Button onClick={() => handleAddNewClick()} type={addNewSelected ? 'primary' : 'default'}>
              Add new
            </Button>
          )}
        </S.ListGrid>
      )}

      <AddBookFooter
        nextDisabled={nextDisabled()}
        handleNext={handleNextClick}
        handleBack={() => handleBack()}
        backDisabled={backDisabled}
      />
    </S.GenreList>
  );
};

export default GenreList;
