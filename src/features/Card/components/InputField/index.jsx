import React from 'react';
import { useController } from 'react-hook-form';

function InputField({ name, control, rules, required, type, label, cardDate }) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className={`card__input ${cardDate ? 'card__date' : ''}`}>
      <input
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
        id={name}
      />
      <label htmlFor={name}>{label}</label>
      {invalid && <div className='card__input__error'>{error.message}</div>}
    </div>
  );
}

export default InputField;
