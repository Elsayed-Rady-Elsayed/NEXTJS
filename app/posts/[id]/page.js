import CartButton from "@/app/components/CartButton";
import React, { Suspense } from "react";
import { AiFillStar } from "react-icons/ai";

const Page = async (props) => {
  const id = props.params.id;
  const product = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await product.json();
  let stars = [];
  for (let i = 0; i < 5; i++) {
    i <= parseInt(data.rating.rate) ? stars.push(0) : stars.push(1);
  }

  return (
    <div className="">
      <h1>your product is:</h1>
      <Suspense
        fallback={
          <div className="bg-transparent border-l border-r border-t animate-spin h-10 w-10 m-10 rounded-full"></div>
        }
      >
        <div className="w-full h-[50%] flex flex-col md:flex-row items-center justify-center gap-3">
          <img src={data.image} alt="" className="h-96" />
          <div className="px-6 py-4 flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {data.title}
            </h3>
            <p className="text-gray-600 text-base mt-2 line-clamp-2">
              {data.description}
            </p>
            <div className="flex">
              <div className="flex items-center">
                {stars.map((el) => {
                  return el == 0 ? (
                    <AiFillStar color="gold" />
                  ) : (
                    <AiFillStar color="gray" />
                  );
                })}
              </div>
              <p>({data.rating.count})</p>
            </div>
            <CartButton item={data} />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
