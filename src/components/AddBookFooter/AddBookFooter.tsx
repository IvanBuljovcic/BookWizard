// Generated with util/create-component.js
import React from 'react';

// Components
import * as S from './AddBookFooterStyles';

// Typings
import { IAddBookFooterProps } from './AddBookFooter.types';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const AddBookFooter: React.FC<IAddBookFooterProps> = ({
  backDisabled,
  handleNext = () => null,
  handleBack = () => null,
  nextDisabled,
  form,
  isSubmit,
  nextButtonText = 'Next',
}) => {
  return (
    <S.AddBookFooter align="center">
      <Button icon={<LeftOutlined />} disabled={backDisabled} onClick={() => handleBack()}>
        Back
      </Button>

      {!isSubmit && (
        <Button disabled={nextDisabled} type={nextDisabled ? 'primary' : 'default'} onClick={() => handleNext()}>
          {nextButtonText}
        </Button>
      )}

      {isSubmit && (
        <Button type="primary" form={form} htmlType="submit">
          {nextButtonText}
        </Button>
      )}
    </S.AddBookFooter>
  );
};

export default AddBookFooter;
