import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

function ProductList({ data }) {
  return (
    <Box>
      <Grid container spacing={0}>
        {data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} p={1}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

export default ProductList;
