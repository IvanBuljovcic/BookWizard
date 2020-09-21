// Generated with util/create-component.js
import React from 'react';

import { IGenreListProps } from './GenreList.types';
import styles from './GenreList.module.scss';

const GenreList: React.FC<IGenreListProps> = ({ foo }) => (
    <div data-testid='GenreList' className={styles.foo_bar}>{foo}</div>
);

export default GenreList;
