import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature() {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.params}/:todoId`} component={DetailPage} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default TodoFeature;
