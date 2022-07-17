import { createContext, useReducer } from 'react';

export const Store = createContext();
const initislState = {
  cart: {
    CartItems: [],
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
        //add to cart
          return {
            ...state,
            cart: {
              ...state.cart,
              CartItems: [...state.cart.CartItems,action.payload],
            },
          };
      
    default:
      return state;
  }
};
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initislState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.childern}</Store.Provider>;
}

// console.log(params);
