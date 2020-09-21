// Generated with util/create-component.js
import React from 'react';

// Components
import * as S from './AddBookFooterStyles';

// Typings
import { IAddBookFooterProps } from './AddBookFooter.types';
import { Button, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const AddBookFooter: React.FC<IAddBookFooterProps> = ({
  backDisabled,
  handleNext = () => null,
  handleBack = () => null,
  nextDisabled,
}) => {
  return (
    <Space align="center" style={{ width: '100%', justifyContent: 'end' }}>
      <Button icon={<LeftOutlined />} disabled={backDisabled} onClick={() => handleBack()}>
        Back
      </Button>

      <Button disabled={nextDisabled} type={nextDisabled ? 'primary' : 'default'} onClick={() => handleNext()}>
        Next
      </Button>
    </Space>
  );
};

export default AddBookFooter;
