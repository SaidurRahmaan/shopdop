import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";


import { useRef } from "react";

const Navbar = ({cart, addTocart, removeTocart, clearCart,subTotal }) => {

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
    <div className="flex flex-col md:flex-row  md:justify-start justify-center items-center mb-0 py-2  shadow-md  sticky top-0 bg-white z-10">
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
      <div className="cart absolute right-0 top-4 mx-5 cursor-pointer flex">
       <Link href={'/login'}><MdAccountCircle className=" text-xl md:text-2xl mx-2 "/></Link>
        <AiOutlineShoppingCart onClick={togglecart} className=" text-xl md:text-2xl" />
      </div>

      <div
        ref={ref} className={`w-72 h-[100vh] sidecart absolute top-0 right-0 bg-pink-100 px-8 py-10  transform transition-transform ${Object.keys(cart).length !==0  ? 'translate-x-0': 'translate-x-full' }`}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={togglecart}
          className="absolute top-2 right-2 cursor-pointer text-2xl text-voilet-500 ">
          <AiFillCloseCircle />
        </span>


        <ol className="list-decimal font-samibold">
          {Object.keys(cart).length==0 && <div className="my-4 font-semibold">No item present in the cart</div> }
          {Object.keys(cart).map((k)=>{return<li key={k}>
            <div className="item flex my-5">
            <div className="w-2/3 font-samibold ">{cart[k].name}</div>
            <div className="w-1/3 flex font-samibold items-center justify-center text-lg "> <AiFillMinusCircle onClick={()=>{removeTocart(k ,1,cart[k].price,cart[k].name, cart[k].size, cart[k].variant )} } className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addTocart(k ,1,cart[k].price,cart[k].name, cart[k].size, cart[k].variant )} } className="text-pink-500 cursor-pointer text-sm" /> </div>
            </div>
          </li>})}
 </ol>
    <div className="font-bold my-2">SubTotal {subTotal}</div>

  <div className="flex">
   <Link href="/checkout"><button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>CheckOut</button></Link>
   <button onClick={clearCart}  className="flex text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"> Clear Cart</button>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
