import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';

function Product({ product }) {
  return (
    <Box>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}
      </Typography>
    </Box>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
