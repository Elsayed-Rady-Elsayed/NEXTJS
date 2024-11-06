"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/store";
const CartButton = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <button
      className="w-full bg-black p-2 text-white rounded"
      onClick={() => {
        dispatch(addToCart({ item: item }));
      }}
    >
      Add to cart
    </button>
  );
};

export default CartButton;
