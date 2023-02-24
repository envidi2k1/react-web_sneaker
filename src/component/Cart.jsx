import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const cartItems = (product) => {
    return (
      <>
                <p className=" fz-small fw-bold">
                  {product.qty * product.price} ₫
                </p>
      </>
    );
  };

  return (
    <div>
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;
