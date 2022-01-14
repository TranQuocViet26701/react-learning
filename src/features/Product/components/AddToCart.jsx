import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../../components/form-controls/QuantityField';

function AddToCart({ onSubmit = null }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Quantity should be at least 1')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  const handlSubmitForm = (data, e) => {
    if (!onSubmit) return;

    onSubmit(data);
  };

  return (
    <Box
      sx={{
        ml: '12px',
      }}
    >
      <form onSubmit={form.handleSubmit(handlSubmitForm)}>
        <QuantityField name="quantity" label="Số lượng" form={form} />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ my: 2, width: '40%' }}
          color="primary"
          disabled={isSubmitting}
        >
          Chọn mua
        </Button>
      </form>
    </Box>
  );
}

AddToCart.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddToCart;
