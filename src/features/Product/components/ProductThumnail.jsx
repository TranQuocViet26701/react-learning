import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { IMAGE_PLACEHOLDER, STATIC_HOST } from '../../../constants/index';

function ProductThumnail({ product }) {
  const thumbnailUrl = product.thumbnail?.url
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : IMAGE_PLACEHOLDER;

  return (
    <Box sx={{ p: 2 }}>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

ProductThumnail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductThumnail;
