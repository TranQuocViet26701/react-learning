import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { cartItemsSelector } from '../Cart/selectors';
import './Card.scss';
import CardOption from './components/CardOption';
import InputField from './components/InputField';

function Card() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const cartItems = useSelector(cartItemsSelector);
  const [option, setOption] = useState('visa');

  const { control, handleSubmit } = useForm({
    defaultValues: {
      cardName: '',
      cardNumber: '',
      cvvNumber: '',
      expiryDate: '',
    },
  });

  const handleChangeOption = (option) => {
    setOption(option);
  };

  const handleFormSubmit = (data) => {
    enqueueSnackbar('You must be login!', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      variant: 'error',
    });
    if (!localStorage.getItem('user')) {
      return;
    }

    if (cartItems.length === 0) {
      enqueueSnackbar('Your cart is empty!', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'error',
      });
    } else {
      console.log({
        cartInfo: {
          ...data,
          'card-type': option,
        },
        cartItems: cartItems,
      });
      enqueueSnackbar('Check out successful!', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        variant: 'success',
      });
      history.push('/');
    }
  };

  return (
    <div className='card'>
      <h3 className='card__title'>Card Details</h3>
      <CardOption option={option} onChangeOption={handleChangeOption} />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          name='cardName'
          control={control}
          rules={{ required: 'Card Name is missing!' }}
          type='text'
          label='Name on card'
          required
        />
        <InputField
          name='cardNumber'
          control={control}
          rules={{ required: 'Card Number is missing!' }}
          type='number'
          label='Card number'
          required
        />

        <div className='card__input__bottom'>
          <InputField
            name='expiryDate'
            control={control}
            rules={{ required: 'Expiry date is missing!' }}
            type='date'
            label='Expiry date'
            required
            cardDate
          />
          <InputField
            name='cvvNumber'
            control={control}
            rules={{ required: 'CVV Number is missing!' }}
            type='number'
            label='CVV'
            required
          />
        </div>
        <button className='card__btn' type='submit'>
          Check Out
        </button>
      </form>
    </div>
  );
}

Card.propTypes = {};

export default Card;
