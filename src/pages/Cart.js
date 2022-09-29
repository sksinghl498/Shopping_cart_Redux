import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>products list</h3>
      <div className="cartWrapper">
        {products.map((product) => {
          return (
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
