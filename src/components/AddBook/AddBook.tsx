// Generated with util/create-component.js
import React, { useState, useReducer } from 'react';

// Components
import * as S from './AddBookStyles';
import StepView from '../StepView';
import GenreList from '../GenreList';
import AddBookFooter from '../AddBookFooter';
import InformationForm from '../InformationForm';
import NewSubgenre from '../NewSubgenre';

// Typings
import { IGenre, ISubGenre } from '../GenreList/GenreList.types';

// Hooks
import useFetch from '../../hooks/useFetch';
import { addBookReducer, initialState } from './reducer/reducer';
import { setStep, setGenre, setSubGenre } from './reducer/actions';

// Constants
const steps_without_new = ['Genre', 'Subgenre', 'Information'];
const steps_with_new = ['Genre', 'Subgenre', 'Add new subgenre', 'Information'];

const AddBook: React.FC = () => {
  const [state, dispatch] = useReducer(addBookReducer, initialState);
  const { step, genre, subgenre } = state;

  const [withoutNew, setWithoutNew] = useState<boolean>(true);

  const genreData = useFetch('genres');

  // Click on `Back` button
  const handleBackClick = () => {
    if (step === 2) {
      setWithoutNew(true);
    }

    setStep(dispatch, step - 1);
  };

  // Filter out the selected genre by its id from the list of genres
  const handleGenreSelect = (genre: IGenre) => {
    setGenre(dispatch, genre);
    setStep(dispatch, 1);
  };

  // Handler for 'Add new subgenre' button
  const handleAddNew = () => {
    setWithoutNew(false);
    setStep(dispatch, 2);
  };

  const handleSetSubgenre = (genre: ISubGenre) => {
    setSubGenre(dispatch, genre);
    setStep(dispatch, 3);
  };

  const handleSetNewSubgenre = (subgenre: ISubGenre) => {
    setSubGenre(dispatch, subgenre);
    setStep(dispatch, 3);
  };

  return (
    <S.AddBook data-testid="AddBook" title="Add book - New book">
      <StepView currentStep={step} steps={withoutNew ? steps_without_new : steps_with_new} />

      {step === 0 && (
        <GenreList genres={genreData} addNewEnabled={false} backDisabled handleNext={handleGenreSelect} genre={genre} />
      )}

      {step === 1 && genre && (
        <GenreList
          genres={genre.subgenres}
          addNewEnabled
          handleAddNew={handleAddNew}
          handleBack={handleBackClick}
          handleNext={handleSetSubgenre}
          genre={subgenre}
        />
      )}

      {step === 2 && (
        <>
          <NewSubgenre parentGenre={genre!} handleAfterSubmit={handleSetNewSubgenre} />
          <AddBookFooter
            backDisabled={false}
            nextDisabled={false}
            handleBack={() => setStep(dispatch, 1)}
            form="newSubgenreForm"
            isSubmit
            nextButtonText="Add new subgenre"
          />
        </>
      )}

      {step === 3 && (
        <>
          <InformationForm genre={genre!.name} subgenre={subgenre!.name} isDescriptionRequired />
          <AddBookFooter
            backDisabled={false}
            nextDisabled={false}
            handleBack={() => {
              if (withoutNew) return setStep(dispatch, 1);
              return setStep(dispatch, 2);
            }}
            form="informationForm"
            isSubmit
            nextButtonText="Add"
          />
        </>
      )}
    </S.AddBook>
  );
};

export default AddBook;
