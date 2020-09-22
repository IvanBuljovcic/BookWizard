// Generated with util/create-component.js
import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import * as S from './SuccessStyles';
import { Button, Space, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { routePaths } from '../Routes';

// Typings
import { TSuccess } from './Success.types';

const Success: React.FC<TSuccess> = ({ history }) => {
  const handleNewBookClick = () => {
    history.push(routePaths.addBook);
  };

  return (
    <S.Success data-testid="Success">
      <CheckCircleOutlined style={{ fontSize: '3rem', color: '#ACB' }} />

      <Typography.Title level={3}>Book added successfully!</Typography.Title>

      <Space>
        <Button onClick={() => handleNewBookClick()}>Add another book</Button>
        <Button onClick={() => history.push(routePaths.root)} type="primary">
          Go to book list
        </Button>
      </Space>
    </S.Success>
  );
};

export default withRouter(Success);
