import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
  label: '',
  disabled: false,
};

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((value) => !value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { form, name, label, disabled } = props;
  const {
    control,
    formState: { errors },
  } = form;

  const hasError = !!errors[name];

  return (
    <FormControl error={hasError} sx={{ my: 1 }} variant="outlined" fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            disabled={disabled}
          />
        )}
      />
      <FormHelperText id={`${name}-helper-text`}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
