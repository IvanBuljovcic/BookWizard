// Generated with util/create-component.js
import React from 'react';

// Components
import * as S from './StepViewStyles';
import { Steps } from 'antd';

// Typings
import { IStepViewProps } from './StepView.types';

const StepView: React.FC<IStepViewProps> = ({ currentStep, steps }) => {
  return (
    <S.StepView data-testid="StepView">
      <Steps current={currentStep}>
        {steps.map(step => (
          <Steps.Step title={step} key={step} />
        ))}
      </Steps>
    </S.StepView>
  );
};

export default StepView;
