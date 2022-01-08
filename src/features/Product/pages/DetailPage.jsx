import { Box, Container, Divider, Grid, Paper } from '@mui/material';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductThumnail from '../components/ProductThumnail';
import { useProductDetail } from '../hooks';

function DetailPage() {
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
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
              Product info
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
