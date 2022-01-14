import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';

function ProductDescription({ product = null }) {
  const safeDescription = DOMPurify.sanitize(product.description)
  return (
    <Box sx={{ p: '8px 16px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Box>
  );
}

ProductDescription.propTypes = {
  product: PropTypes.object,
};

export default ProductDescription;
