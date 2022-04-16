import React from 'react';
import PropTypes from 'prop-types';
import './CardOption.scss';

function CardOption({ option = 'visa', onChangeOption = null }) {
  const handleChangeOption = (e) => {
    if (onChangeOption) {
      onChangeOption(e.target.value);
    }
  };

  return (
    <div className='card__option'>
      <h5 className='card__option__title'>Card type</h5>
      <div className='card__radio'>
        <label htmlFor='visa'>
          <input
            type='radio'
            name='card-option'
            id='visa'
            value='visa'
            onChange={handleChangeOption}
          />
          <div
            className={`card__radio__img ${option === 'visa' ? 'checked' : ''}`}
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
              alt=''
            />
          </div>
        </label>
        <label htmlFor='master-card'>
          <input
            type='radio'
            name='card-option'
            id='master-card'
            value='master-card'
            onChange={handleChangeOption}
          />
          <div
            className={`card__radio__img ${
              option === 'master-card' ? 'checked' : ''
            }`}
          >
            <img
              src='https://webtindung.com/wp-content/uploads/2016/04/the-mastercard-la-gi-33-4005.png'
              alt=''
            />
          </div>
        </label>
      </div>
    </div>
  );
}

CardOption.propTypes = {
  option: PropTypes.string,
  onChangeOption: PropTypes.func,
};

export default CardOption;
