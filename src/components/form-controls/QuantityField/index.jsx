import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

QuantityField.defaultProps = {
  label: '',
  disabled: false,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const {
    control,
    setValue,
    formState: { errors },
  } = form;

  const hasError = !!errors[name];

  return (
    <Box>
      <FormControl
        error={hasError}
        sx={{ my: 1 }}
        variant="outlined"
        size="small"
      >
        <Typography variant="subtitle2" mb={1}>
          {label}
        </Typography>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                maxWidth: '150px',
              }}
            >
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }
              >
                <RemoveIcon />
              </IconButton>
              <OutlinedInput
                id={name}
                type="number"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
              />
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  )
                }
              >
                <AddIcon />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText id={`${name}-helper-text`}>
          {errors[name]?.message}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}

export default QuantityField;
