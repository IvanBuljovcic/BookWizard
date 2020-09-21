// Generated with util/create-component.js
import React, { useState } from 'react';

// Components
import * as S from './GenreListStyles';
import { Button, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

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
  console.log('genres: ', genres);
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
    if (!selectedGenre) return false;
    if (!addNewSelected) return false;
    return true;
  };

  const handleNextClick = () => {
    if (addNewSelected) return handleAddNew();

    return handleNext(selectedGenre || 1);
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

      {/* <Space align="center" style={{ width: '100%', justifyContent: 'end' }}>
        <Button icon={<LeftOutlined />} disabled={backDisabled} onClick={() => handleBack()}>
          Back
        </Button>

        <Button
          disabled={!nextEnabled()}
          type={nextEnabled() ? 'primary' : 'default'}
          onClick={() => handleNextClick()}
        >
          Next
        </Button>
      </Space> */}
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
