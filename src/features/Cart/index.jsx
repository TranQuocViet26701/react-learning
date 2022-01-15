import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);

  return <div>{`Cart feature ${cartTotal}`}</div>;
}

CartFeature.propTypes = {};

export default CartFeature;
