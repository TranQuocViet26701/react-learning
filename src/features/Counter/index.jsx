import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDeacreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      <h4>Counter: {counter}</h4>
      <div>
        <Button
          variant="contained"
          sx={{
            m: 0.5,
          }}
          onClick={handleIncreaseClick}
        >
          Increase
        </Button>
        <Button
          variant="contained"
          sx={{
            m: 0.5,
          }}
          onClick={handleDeacreaseClick}
        >
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
