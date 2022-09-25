import React from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from 'next/link'


const Checkout = ({cart, addTocart, removeTocart,subTotal}) => {


  return (
    <div className="container mx-2 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">CheckOut</h1>
      <h2 className="font-bold text-xl">1.Delivery Details</h2>
      <div className="mx-auto flex my-2">
      <div className="px-2 w-1/2">
      <div className=" mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
      <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      </div>

      <div className="px-2 w-1/2">
      <div className=" mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      </div>
      </div>

      <div className="px-2 w-full">
      <div className="mb-4">
      <label HtmlhtmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
      <textarea  name='' rows="2" id="" cols="30"className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  ></textarea>
    </div>
      </div>

      <div className="mx-auto flex my-2">
      <div className="px-2 w-1/2">
      <div className=" mb-4">
      <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
      <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      </div>

      <div className="px-2 w-1/2">
      <div className=" mb-4">
      <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
      <input type="city" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      </div>
      </div>

      
      <div className="mx-auto flex my-2">
      <div className="px-2 w-1/2">
      <div className=" mb-4">
      <label htmlFor="post" className="leading-7 text-sm text-gray-600">Post</label>
      <input type="text" id="post" name="post" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      </div>

      <div className="px-2 w-1/2">
      <div className=" mb-4">
      <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
      <input type="pincode" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      </div>
      </div>


      <h2 className="font-bold text-xl">2.Review Cart Item & Pay</h2>


      <div className="sidecart  bg-pink-100 p-6 m-4">
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>

        <ol className="list-decimal font-samibold">
          {Object.keys(cart).length==0 && <div className="my-4 font-semibold">No item present in the cart</div> }
          {Object.keys(cart).map((k)=>{return<li key={k}>
            <div className="item flex my-5">
            <div className="font-samibold ">{cart[k].name}</div>
            <div className="flex font-samibold items-center justify-center text-lg "> <AiFillMinusCircle onClick={()=>{removeTocart(k ,1,cart[k].price,cart[k].name, cart[k].size, cart[k].variant )} } className="text-pink-500 cursor-pointer text-sm "/><span className="mx-2">{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addTocart(k ,1,cart[k].price,cart[k].name, cart[k].size, cart[k].variant )} } className="text-pink-500 cursor-pointer text-sm" /> </div>
            </div>
          </li>})}
        </ol>
        <span className="font-bold">SubTotal {subTotal}</span>
    </div>

      <div className="mx-8">
      <Link href="/checkout"><button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>Pay : {subTotal}</button></Link>
      </div>

    </div>

  )
}

export default Checkout