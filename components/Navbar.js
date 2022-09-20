import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";


import { useRef } from "react";

const Navbar = () => {
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row  md:justify-start justify-center items-center mb-0 py-2  shadow-md">
      <div className="logo mx-5 cursor-pointer">
        <Link href={"/"}>
          <Image src="/logo.png" alt="" width={200} height={40} />
        </Link>
      </div>

      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <a>
              <li>Tshirt</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/shose"}>
            <a>
              <li>Shose</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        onClick={togglecart}
        className="cart absolute right-0 top-4 mx-5 cursor-pointer"
      >
        <AiOutlineShoppingCart className=" text-xl md:text-2xl" />
      </div>

      <div
        ref={ref}
        className="w-72 h-full sidecart absolute top-0 right-0 bg-pink-100 p-10  transform transition-transform translate-x-full  "
      >
        <h2 className="font-bold text-xl text-center">shopping Cart</h2>
        <span
          onClick={togglecart}
          className="absolute top-2 right-2 cursor-pointer text-2xl text-voilet-500 "
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-samibold">

          <li>
            <div className="item flex my-5">
            <div className="w-2/3 font-samibold ">T-shirt- ware the Shirt </div>
            <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillPlusCircle className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">1</span><AiFillMinusCircle className="text-pink-500 cursor-pointer text-sm" /> </div>
            </div>
          </li>

          <li>
          <div className="item flex my-5">
          <div className="w-2/3 font-samibold ">T-shirt- ware the Shirt </div>
          <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillPlusCircle className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">1</span><AiFillMinusCircle className="text-pink-500 cursor-pointer text-sm" /> </div>
          </div>
        </li>

        <li>
        <div className="item flex my-5">
        <div className="w-2/3 font-samibold ">T-shirt- ware the Shirt </div>
        <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillPlusCircle className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">1</span><AiFillMinusCircle className="text-pink-500 cursor-pointer text-sm" /> </div>
        </div>
      </li>

      <li>
      <div className="item flex my-5">
      <div className="w-2/3 font-samibold ">T-shirt- ware the Shirt </div>
      <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillPlusCircle className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">1</span><AiFillMinusCircle className="text-pink-500 cursor-pointer text-sm" /> </div>
      </div>
    </li>

    <li>
    <div className="item flex my-5">
    <div className="w-2/3 font-samibold ">T-shirt- ware the Shirt </div>
    <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillPlusCircle className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">1</span><AiFillMinusCircle className="text-pink-500 cursor-pointer text-sm" /> </div>
    </div>
  </li>

  <li>
  <div className="item flex my-5">
  <div className="w-2/3 font-samibold ">T-shirt- ware the Shirt </div>
  <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillPlusCircle className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">1</span><AiFillMinusCircle className="text-pink-500 cursor-pointer text-sm" /> </div>
  </div>
</li>

        </ol>
        <div className="flex">
        <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>CheckOut</button>
        <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"> Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
