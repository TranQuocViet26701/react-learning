import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container spacing={0}>
        {Array.from(new Array(length)).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} p={1}>
            <Box>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 12,
};

export default ProductSkeletonList;
