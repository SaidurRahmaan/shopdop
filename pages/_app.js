import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})

  const[subTotal , setsubTotal]= useState(0)



  useEffect(() => {
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
      else{
  
      }
    } catch (error) {
      localStorage.clear()
    }
  }, [])



  const saveCart =(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt = 0
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.lenght;i++ ){
      subt += myCart[keys[i]]["price"] *  myCart[keys[i]].qty;
    }
    setsubTotal(subt)
  }




  const addTocart = (itemCode, qty, price , name, size, variant) =>{
      let newCart =JSON.parse(JSON.stringify(cart));
      if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty+ qty
      }
      else{
        newCart[itemCode] = {qty:1, price, name , size, variant}
      }

      setCart(newCart)
      saveCart(newCart)
  }




    const clearCart=()=>{
      setCart({})
      saveCart({})
    }




    const removeTocart = (itemCode, qty, price , name, size, variant) =>{
      let newCart = JSON.parse(JSON.stringify(cart));
      if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty- qty
      }
      if(newCart[itemCode]["qty"]<=0){
          delete newCart[itemCode]
      }

      setCart(newCart)
      saveCart(newCart)
  }








  return  <>
  <Navbar key={subTotal}  cart={cart} addTocart={addTocart} removeTocart={removeTocart} clearCart={clearCart} subTotal={subTotal}/>
  <Component cart={cart} addTocart={addTocart} removeTocart={removeTocart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
  
  
}

export default MyApp
