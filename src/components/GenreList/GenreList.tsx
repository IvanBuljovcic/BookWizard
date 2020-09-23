// Generated with util/create-component.js
import React, { useEffect, useState } from 'react';

// Components
import * as S from './GenreListStyles';
import { Button } from 'antd';
import AddBookFooter from '../AddBookFooter';

// Typings
import { IGenre, IGenreListProps, ISubGenre } from './GenreList.types';

const GenreList: React.FC<IGenreListProps> = ({
  genres,
  addNewEnabled = false,
  backDisabled = false,
  handleNext = () => null,
  handleAddNew = () => null,
  handleBack = () => null,
  genre,
}) => {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | ISubGenre | null>();
  const [addNewSelected, setAddNewSelected] = useState<boolean>(false);

  useEffect(() => {
    if (genre) setSelectedGenre(genre);
  }, [genre]);

  const handleGenreChange = (genre: IGenre | ISubGenre) => {
    if (addNewEnabled) setAddNewSelected(false);

    setSelectedGenre(genre);
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
            if (genre.id === selectedGenre?.id)
              return (
                <Button key={genre.id} type="primary">
                  {genre.name}
                </Button>
              );

            return (
              <Button key={genre.id} onClick={() => handleGenreChange(genre)}>
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
