import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object({
    fullName: yup
      .string()
      .required('Please enter your fullname')
      .test(
        'should be at least 2 words',
        'Please enter at least 2 words',
        (value) => {
          const arr = value.trim().split(' ');
          return arr.length >= 2;
        }
      ),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at least 6 characters'),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password dose not match'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);

    form.reset();
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>

      <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
          color="primary"
        >
          Create an account
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
