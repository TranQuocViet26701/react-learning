import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice.jsx';

function ProductFilters({ filters, onChange }) {
  const handleChangeByCategory = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  return (
    <>
      <FilterByCategory onChange={handleChangeByCategory} />
      <Divider />
      <FilterByPrice />
    </>
  );
}

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

ProductFilters.defaultProps = {
  onChange: null,
};

export default ProductFilters;
