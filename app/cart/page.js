"use client";

import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cart = useSelector((state) => state.cart.cart);

  return <div>cart</div>;
};

export default Page;
