// Generated with util/create-component.js
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';

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

// Constants
const steps_without_new = ['Genre', 'Subgenre', 'Information'];
const steps_with_new = ['Genre', 'Subgenre', 'Add new subgenre', 'Information'];

const AddBook: React.FC = () => {
  const isFirstRender = useRef(true);

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
  const [selectedSubgenre, setSelectedSubgenre] = useState<string>('');
  const [withoutNew, setWithoutNew] = useState<boolean>(true);

  const genreData = useFetch('genres');

  // 'Callback' to the useState of setSelectedGenre
  //
  // Set step (to 1) when the state `selectedGenre` changes
  useEffect(() => {
    if (!isFirstRender.current) {
      setCurrentStep(1);
    }
  }, [selectedGenre]);

  // On initial render, set ref to false
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Click on `Back` button
  const handleBackClick = () => {
    if (currentStep === 2) {
      setWithoutNew(true);
    }

    setCurrentStep(prevState => prevState - 1);
  };

  // Filter out the selected genre by its id from the list of genres
  const handleGenreSelect = (id: number) => {
    const selectedGenre = _.find(genreData, (item: IGenre) => item.id === id);

    setSelectedGenre(selectedGenre!); // Set selectedGenre; Telling TypeScript that it can trust the type to be correct
  };

  const handleAddNew = () => {
    setWithoutNew(false);
    setCurrentStep(2);
  };

  const handleSetSubgenre = (id: number) => {
    const selectedSubGenre = _.find(selectedGenre?.subgenres, (item: ISubGenre) => item.id === id);
    setSelectedSubgenre(selectedSubGenre!.name);
    setCurrentStep(3);
  };

  const handleSetNewSubgenre = (name: string) => {
    setSelectedSubgenre(name);
    setCurrentStep(3);
  };

  return (
    <S.AddBook data-testid="AddBook" title="Add book - New book">
      <StepView currentStep={currentStep} steps={withoutNew ? steps_without_new : steps_with_new} />

      {currentStep === 0 && (
        <GenreList genres={genreData} addNewEnabled={false} backDisabled handleNext={handleGenreSelect} />
      )}

      {currentStep === 1 && selectedGenre && (
        <GenreList
          genres={selectedGenre.subgenres}
          addNewEnabled
          handleAddNew={handleAddNew}
          handleBack={handleBackClick}
          handleNext={handleSetSubgenre}
        />
      )}

      {currentStep === 2 && (
        <>
          <NewSubgenre parentGenre={selectedGenre!} handleAfterSubmit={handleSetNewSubgenre} />
          <AddBookFooter
            backDisabled={false}
            nextDisabled={false}
            handleBack={() => setCurrentStep(1)}
            form="newSubgenreForm"
            isSubmit
            nextButtonText="Add new subgenre"
          />
        </>
      )}

      {currentStep === 3 && (
        <>
          <InformationForm genre={selectedGenre!.name} subgenre={selectedSubgenre} isDescriptionRequired />
          <AddBookFooter
            backDisabled={false}
            nextDisabled={false}
            handleBack={() => {
              if (withoutNew) return setCurrentStep(1);
              return setCurrentStep(2);
            }}
            form="myForm"
            isSubmit
            nextButtonText="Add"
          />
        </>
      )}
    </S.AddBook>
  );
};

export default AddBook;
