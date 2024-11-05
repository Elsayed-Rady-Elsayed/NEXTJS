import React, { Suspense } from "react";
import Card from "../components/card/Card";

const page = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
    next: {
      revalidate: 2,
    },
  });
  const products = await response.json();
  return (
    <Suspense
      fallback={
        <div className="bg-transparent border-l border-r border-t animate-spin h-10 w-10 m-10 rounded-full"></div>
      }
    >
      <div className="grid grid-cols-4 gap-5 p-3">
        {products.map((e) => {
          return (
            <Card
              id={e.id}
              title={e.title}
              image={e.image}
              description={e.description}
              rating={e.rating}
              link={""}
            />
          );
        })}
      </div>
    </Suspense>
  );
};

export default page;
