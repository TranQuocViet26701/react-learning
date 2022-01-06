import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../api/categoryApi';

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      const list = await categoryApi.getAll();
      setCategoryList(
        list.map((category) => ({ id: category.id, name: category.name }))
      );
    })();
  }, []);

  const handleCategoryChange = (category) => {
    if (!onChange) return;

    onChange(category.id);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography sx={{ fontSize: '14px', pb: '14px', fontWeight: '500' }}>
        DANH MỤC SẢN PHẨM
      </Typography>

      {categoryList.map((category) => (
        <Typography
          key={category.id}
          sx={{ fontSize: '14px', pb: '5px', cursor: 'pointer' }}
          onClick={() => handleCategoryChange(category)}
        >
          {category.name}
        </Typography>
      ))}
    </Box>
  );
}

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

FilterByCategory.defaultProps = {
  onChange: null,
};

export default FilterByCategory;
