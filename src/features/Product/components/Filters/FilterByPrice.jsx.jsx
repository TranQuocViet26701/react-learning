import { Box, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2">GIÁ</Typography>
      <Typography variant="caption" color="text.secondary">
        Chọn khoảng giá
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          name="salePrice_gte"
          size="small"
          value={values.salePrice_gte}
          onChange={handleChange}
        />

        <Box
          sx={{
            display: 'inline-block',
            mx: '4px',
            minWidth: '7px',
            height: '1px',
            fontSize: '0px',
            background: 'rgb(154, 154, 154)',
          }}
        >
          -
        </Box>
        <TextField
          name="salePrice_lte"
          size="small"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        size="small"
        onClick={handleSubmit}
        sx={{
          mt: 1,
        }}
      >
        Áp dụng
      </Button>
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
