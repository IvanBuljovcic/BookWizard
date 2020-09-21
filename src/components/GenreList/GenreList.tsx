// Generated with util/create-component.js
import React from 'react';

// Components
import * as S from './GenreListStyles';

// Typings
import { IGenreListProps } from './GenreList.types';

const GenreList: React.FC<IGenreListProps> = ({ foo }) => (
  <S.GenreList data-testid="GenreList">
    <h1>
      Component generated with <code>util/create-component.js</code>
    </h1>
    {foo}
  </S.GenreList>
);

export default GenreList;
