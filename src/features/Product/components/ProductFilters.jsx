import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice.jsx';
import FilterByService from './Filters/FilterByService';

function ProductFilters({ filters, onChange }) {
  const handleChangeByCategory = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handleFilterChange = (newPrice) => {
    if (!onChange) return;

    const newFilters = {
      ...newPrice,
    };
    onChange(newFilters);
  };

  return (
    <>
      <FilterByCategory onChange={handleChangeByCategory} />
      <Divider />
      <FilterByPrice onChange={handleFilterChange} />
      <Divider />
      <FilterByService filters={filters} onChange={handleFilterChange} />
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
