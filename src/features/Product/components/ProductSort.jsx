import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

function ProductSort({ value, onSortChange }) {
  const handleSortChange = (event, newValue) => {
    if (onSortChange) onSortChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleSortChange}
        aria-label="basic tabs example"
      >
        <Tab label="Giá Thấp" value="salePrice:ASC" />
        <Tab label="Giá Cao" value="salePrice:DESC" />
      </Tabs>
    </Box>
  );
}

ProductSort.propTypes = {
  onSortChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

ProductSort.defaultProps = {
  onSortChange: null,
};

export default ProductSort;
