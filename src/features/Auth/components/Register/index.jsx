import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

function Register(props) {
  const { onCloseDialog } = props;
  
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const data = unwrapResult(resultAction);

      // close dialog
      if (onCloseDialog) {
        onCloseDialog();
      }

      // register successful
      console.log('New user: ', data);
      enqueueSnackbar('Register successful!!!', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        variant: 'success',
      });
    } catch (error) {
      enqueueSnackbar(error.message, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        variant: 'error',
      });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

Register.propTypes = {
  onCloseDialog: PropTypes.func,
};

Register.defaultProps = {
  onCloseDialog: null,
};

export default Register;
