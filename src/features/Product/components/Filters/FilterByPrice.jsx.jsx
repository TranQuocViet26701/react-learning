import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

function FilterByPrice(props) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ fontSize: '14px', pb: '14px', fontWeight: '500' }}>
        GIÁ
      </Typography>
    </Box>
  );
}

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

FilterByPrice.defaultProps = {
  onChange: null,
};

export default FilterByPrice;
