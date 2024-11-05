"use client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const style = "capitalize text-gray-600 hover:text-black";
  return (
    <nav className="py-4 flex justify-center gap-5 items-center shadow-md mb-5">
      <Link href={"/posts"} className={style}>
        <button>home</button>
      </Link>
      <Link href={"/posts"} className={style}>
        categories
      </Link>
      <Link href={"/cart"} className={style}>
        cart
      </Link>
      <Link href={"/posts"} className={style}>
        login
      </Link>
    </nav>
  );
};

export default NavBar;
