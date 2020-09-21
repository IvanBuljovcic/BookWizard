// Generated with util/create-component.js
import React from 'react';
import _ from 'lodash';

// Typings
import { IStepViewProps } from './StepView.types';

// Components
import * as S from './StepViewStyles';
import { Steps } from 'antd';

const StepView: React.FC<IStepViewProps> = ({ currentStep, steps, disabledSteps }) => {
  return (
    <S.StepView data-testid="StepView">
      <Steps current={currentStep}>
        {steps.map((step, index) => {
          const isDisabled = _.includes(disabledSteps, index + 1);

          return <Steps.Step title={step} disabled={isDisabled} key={step} />;
        })}
      </Steps>
    </S.StepView>
  );
};

export default StepView;
