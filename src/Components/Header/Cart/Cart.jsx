import React, { Component, useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../../../store/Store';

const Cart = () => {
    // const { state } = useContext(Store);
    // const {cart}=state
  return (
    <>
      <Link to="/CartPage" style={{ cursor: 'pointer' }}>
        <i className="fa-brands fa-opencart fs-1 header-cart text-white">
          {/* {cart.CartItems.length > 0 && (
            <Badge pill bd="danger">
              {cart.CartItems.length}
            </Badge>
          )} */}
          <span className="cart-count ms-sm-1 me-3 font-monospace">0</span>
        </i>
      </Link>
    </>
  );
};

export default Cart


