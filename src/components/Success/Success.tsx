// Generated with util/create-component.js
import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';

// Components
import * as S from './SuccessStyles';
import { Button, Space, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

// Typings
import { TSuccess } from './Success.types';

// Reducer | Reducer actions
import { addBookReducer, initialState } from '../AddBook/reducer/reducer';
import { resetState } from '../AddBook/reducer/actions';

// Constants
import { routePaths } from '../Routes';

const Success: React.FC<TSuccess> = ({ history }) => {
  const [, dispatch] = useReducer(addBookReducer, initialState);

  const handleNewBookClick = () => {
    resetState(dispatch);
    history.push(routePaths.addBook);
  };

  return (
    <S.Success data-testid="Success">
      <CheckCircleOutlined style={{ fontSize: '3rem', color: '#1890ff' }} />

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
