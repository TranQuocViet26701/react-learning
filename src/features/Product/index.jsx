import { Box } from '@mui/material';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route exact path={match.url} component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

ProductFeature.propTypes = {};

export default ProductFeature;
