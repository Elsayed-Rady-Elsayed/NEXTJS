"use client";
import { useDispatch, useSelector } from "react-redux";

const CartButton = ({ id }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <button
      className="w-full bg-black p-2 text-white rounded"
      onClick={() => {
        dispatch(increment());
      }}
    >
      Add to cart {count}
    </button>
  );
};

export default CartButton;
