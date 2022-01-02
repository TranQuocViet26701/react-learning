import React from 'react';
import RegisterForm from '../RegisterForm';

function Register(props) {
  const handleSubmit = (values) => {
    console.log('Register submit: ', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

Register.propTypes = {};

export default Register;
