import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  label: '',
  disabled: false,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    control,
    formState: { errors },
  } = form;

  const hasError = !!errors[name];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          sx={{ my: 1 }}
          fullWidth
          id={name}
          label={label}
          variant="outlined"
          disabled={disabled}
          error={hasError}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
