import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const filterService = [
  {
    label: 'FREESHIP không giới hạn',
    value: 'isFreeShip',
  },
  {
    label: 'Có khuyến mãi',
    value: 'isPromotion',
  },
];

function FilterByService({ onChange, filters }) {
  const handleChange = (event) => {
    if (!onChange) return;

    const { name, checked } = event.target;
    onChange({ [name]: checked });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <FormGroup>
        {filterService.map((service) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(filters[service.value])}
                onChange={handleChange}
                name={service.value}
              />
            }
            label={<Typography variant="body2">{service.label}</Typography>}
            key={service.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

FilterByService.defaultProps = {
  onChange: null,
};

export default FilterByService;
