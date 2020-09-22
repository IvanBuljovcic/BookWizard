import React from 'react';
import { Route, Switch } from 'react-router';

// Components
import AddBook from '../AddBook';
import Success from '../Success';
import BookList from '../BookList';

const routePaths = {
  root: '/',
  addBook: '/add-book',
  success: '/success',
};

const Routes: React.FC = () => (
  <Switch>
    <Route path={routePaths.root} exact component={BookList} />

    <Route path={routePaths.addBook} component={AddBook} />

    <Route path={routePaths.success} component={Success} />
  </Switch>
);

export { Routes as default, routePaths };
