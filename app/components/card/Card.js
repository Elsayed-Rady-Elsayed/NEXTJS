import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ title, image, description, link, rating, id }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    i <= parseInt(rating.rate) ? stars.push(0) : stars.push(1);
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white cursor-pointer">
      <Link href={`/posts/${id}`}>
        <img
          className="w-full h-48 object-contain mt-1"
          src={image}
          alt={title}
        />
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-base mt-2 line-clamp-2">
            {description}
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
            <p>({rating.count})</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
