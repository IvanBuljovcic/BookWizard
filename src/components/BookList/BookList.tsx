// Generated with util/create-component.js
import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import * as S from './BookListStyles';
import { Card, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

// Typings
import { IBook, TRouterBookList } from './BookList.types';

// Hooks
import useFetch from '../../hooks/useFetch';

// Constants
import { routePaths } from '../Routes';

const BookList: React.FC<TRouterBookList> = ({ history }) => {
  const booksData = useFetch('books');

  return (
    <S.BookList data-testid="BookList" title="Books">
      <S.ListWrapper>
        <Card onClick={() => history.push(routePaths.addBook)} type="inner" hoverable>
          <PlusCircleOutlined style={{ fontSize: '3rem', color: '#1890ff' }} />
          <Typography.Title level={4}>Add new book</Typography.Title>
        </Card>

        {booksData &&
          booksData.map((book: IBook) => (
            <Card title={book.author} key={book.id} type="inner">
              <Typography.Title level={4}>{book.book_title}</Typography.Title>
            </Card>
          ))}
      </S.ListWrapper>
    </S.BookList>
  );
};

export default withRouter(BookList);
