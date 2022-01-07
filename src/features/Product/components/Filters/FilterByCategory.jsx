import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, List, ListItem } from '@mui/material';
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
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      <List>
        {categoryList.map((category) => (
          <ListItem
            key={category.id}
            sx={{
              p: '4px 0',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                transition: 'all .25s ease',

                '&:hover': {
                  color: 'primary.dark',
                },
              }}
              onClick={() => handleCategoryChange(category)}
            >
              {category.name}
            </Typography>
          </ListItem>
        ))}
      </List>
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
