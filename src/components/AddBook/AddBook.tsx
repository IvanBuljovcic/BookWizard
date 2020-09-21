// Generated with util/create-component.js
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';

// Components
import * as S from './AddBookStyles';
import StepView from '../StepView';
import GenreList from '../GenreList';

// Typings
import { IGenre } from '../GenreList/GenreList.types';
import { Checkbox, Input, Typography } from 'antd';
import AddBookFooter from '../AddBookFooter';

const AddBook: React.FC = () => {
  const isFirstRender = useRef(true);

  const [data, setData] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);

  useEffect(() => {
    fetch('http://localhost:4321/genres')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      setCurrentStep(1);
    }
  }, [selectedGenre]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const handleBackClick = () => {
    if (currentStep === 2) {
      disabledSteps.push(2);
    }

    setCurrentStep(prevState => prevState - 1);
  };

  const handleGenreSelect = (id: number) => {
    const selectedGenre = _.find(data, (item: IGenre) => item.id === id);

    setSelectedGenre(selectedGenre!);
  };

  const handleAddNew = () => {
    _.remove(disabledSteps, 2);
    setCurrentStep(2);
  };

  const steps = ['Genre', 'Subgenre', 'Add new subgenre', 'Information'];
  const disabledSteps = [2];

  return (
    <S.AddBook data-testid="AddBook">
      <StepView currentStep={currentStep} steps={steps} disabledSteps={disabledSteps} />

      {currentStep === 0 && (
        <GenreList genres={data} addNewEnabled={false} backDisabled handleNext={handleGenreSelect} />
      )}

      {currentStep === 1 && selectedGenre && (
        <GenreList
          genres={selectedGenre.subgenres}
          addNewEnabled
          handleAddNew={handleAddNew}
          handleBack={handleBackClick}
          handleNext={() => setCurrentStep(3)}
        />
      )}

      {currentStep === 2 && (
        <>
          <div>
            <Input type="text" placeholder="Subgenre name" />

            <Checkbox>Description is required for this subgenre</Checkbox>
          </div>
          <AddBookFooter
            backDisabled={false}
            nextDisabled={false}
            handleBack={() => setCurrentStep(1)}
            handleNext={() => setCurrentStep(3)}
          />
        </>
      )}

      {currentStep === 3 && (
        <>
          <Typography.Title>Information</Typography.Title>
          <AddBookFooter
            backDisabled={false}
            nextDisabled={false}
            handleBack={() => {
              if (disabledSteps.length) return setCurrentStep(1);
              return setCurrentStep(2);
            }}
            handleNext={() => console.log('Finish')}
          />
        </>
      )}
    </S.AddBook>
  );
};

export default AddBook;
