import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isShowMiniCart: false,
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  reducers: {
    showMiniCart: (state) => {
      state.isShowMiniCart = true;
    },
    hideMiniCart: (state) => {
      state.isShowMiniCart = false;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;

      const index = state.cartItems.findIndex((item) => item.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const index = state.cartItems.findIndex((item) => item.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== idNeedToRemove
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;
export default reducer;
