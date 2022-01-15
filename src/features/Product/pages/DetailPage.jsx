import {
  Box,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Paper,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { addToCart } from '../../Cart/cartSlice';
import AddToCart from '../components/AddToCart';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReview from '../components/ProductReview';
import ProductThumnail from '../components/ProductThumnail';
import { useProductDetail } from '../hooks';

function DetailPage() {
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const dispatch = useDispatch();

  const { product, loading } = useProductDetail(productId);

  const handleAddToCartSubmit = (formValues) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: formValues.quantity,
    });

    dispatch(action);
  };

  if (loading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box mb={5}>
      <Container>
        <Paper elevation={0}>
          <Grid container spacing={0.5}>
            <Grid
              item
              sx={{
                width: '475px',
              }}
            >
              <ProductThumnail product={product} />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              item
              sx={{
                flex: '1 1 0',
              }}
            >
              <ProductInfo product={product} />
              <AddToCart onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Paper elevation={0}>
          <Switch>
            <Route path={url} exact>
              <ProductDescription product={product} />
            </Route>
            <Route path={`${url}/additional`}>
              <ProductAdditional />
            </Route>
            <Route path={`${url}/reviews`}>
              <ProductReview />
            </Route>
          </Switch>
        </Paper>
      </Container>
    </Box>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
