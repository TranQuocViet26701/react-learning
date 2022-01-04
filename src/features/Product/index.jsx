import { Box } from '@mui/material';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} component={ListPage} />
      </Switch>
    </Box>
  );
}

ProductFeature.propTypes = {};

export default ProductFeature;
