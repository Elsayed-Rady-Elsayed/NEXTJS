"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const items = cart.map((data) => {
    return (
      <div className="">
        <div className=" w-full h-[50%] flex flex-col md:flex-row items-center justify-center gap-3">
          <img src={data.image} alt="" className="h-96" />
          <div className="px-6 py-4 flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {data.title}
            </h3>
            <p className="text-gray-600 text-base mt-2 line-clamp-2">
              {data.description}
            </p>
            <button
              onClick={() => {}}
              className="bg-red-400 text-white p-2 rounded-md"
            >
              remove
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="grid grid-cols-2 items-center gap-5">{items}</div>;
};

export default Page;
