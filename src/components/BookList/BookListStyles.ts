// Generated with util/create-component.js
import styled from 'styled-components';
import { Card } from 'antd';

const mainColor = '#1890ff';

export const BookList = styled(Card)`
  .ant-card-head {
    background-color: ${mainColor};

    font-weight: bold;
  }

  border-color: ${mainColor};

  .ant-card {
    border-color: ${mainColor};
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;
