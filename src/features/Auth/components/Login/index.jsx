import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

function Login(props) {
  const { onCloseDialog } = props;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    console.log('Login : ', values);
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const data = unwrapResult(resultAction);

      // close dialog
      if (onCloseDialog) {
        onCloseDialog();
      }

      // login successful
      console.log('Current user: ', data);
    } catch (error) {
      enqueueSnackbar(error.message, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'error',
      });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

Login.propTypes = {
  onCloseDialog: PropTypes.func,
};

Login.defaultProps = {
  onCloseDialog: null,
};

export default Login;
