import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./redux/cartSlice";
import axios from './axios'

 function Order(props){
  const dispatch = useDispatch()
   let shippingPrice = props.totalQuantity > 0 && props.shipping == "delivery" ? 5 : 0;
   let taxable = props.totalPrice + shippingPrice
   let taxed = taxable * 0.1

   const id = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   let random;

   let str = ''
   for(let i = 0; i <= 15; i++){
      random = id[Math.floor(Math.random()*id.length)]
      str += random
   }

   let str2 = str.split('');

   let date1 = new Date()
   let year = date1.getFullYear()
   let month = date1.getMonth()
   let date = date1.getDate()
   let hours = date1.getHours()
   let minutes = date1.getMinutes()

   let cart = useSelector((state) => state.cart.cart)
   
  const [orderCart, setOrderCart] = useState(() => {
    let item = localStorage.getItem('order');
    return item ? JSON.parse(item) : [];
  })
  
   function resetCart(){
      if(cart.length > 0){
        let cart2 = cart
        setOrderCart(prev => [...prev, {
          id: `#${str2[0]}${str2[1]}${str2[2]}${str2[3]}-${str2[4]}${str2[5]}${str2[6]}${str2[7]}-${str2[8]}${str2[9]}${str2[10]}${str2[11]}-${str2[12]}${str2[13]}${str2[14]}${str2[15]}`,
          product: cart2,
          date: `${date}-${month}-${year}  ${hours}:${minutes}`
        }])
        localStorage.removeItem('cart')
        dispatch(setCart([]))
      }
     
   }
   
   const productIds = []
   cart.forEach((product) => {
    productIds.push(product.id)
   })
   const user = JSON.parse(localStorage.getItem('user'))

   const makeOrder = async () => {
    const orderDetails = {
         id: `#${str2[0]}${str2[1]}${str2[2]}${str2[3]}-${str2[4]}${str2[5]}${str2[6]}${str2[7]}-${str2[8]}${str2[9]}${str2[10]}${str2[11]}-${str2[12]}${str2[13]}${str2[14]}${str2[15]}`,
         user: user,
         product_ids: productIds
    }
    try{
      const response = await axios.post(`/store/orders/`, orderDetails)
    }catch(err){
      alert("server not running")
    }
   }

   useEffect(() => {
      let orderString = JSON.stringify(orderCart)
      localStorage.setItem('order',orderString)
      
   }, [orderCart])
   function setVisibility(){
      return props.totalQuantity > 0 ? props.setVisible(true) : props.setVisible(false)
   }
    return(
        <>
          <div className="total-container">
            <p>Items({props.totalQuantity}) : &nbsp;   <span>${props.totalPrice}</span></p>
            <p>Delivery & Shipping : &nbsp;  <span>${ shippingPrice }</span></p>
            <p>Total before tax : &nbsp;  <span>${ taxable }</span></p>
            <p>Estimated tax(10%) : &nbsp;   <span>${taxed}</span></p>
            <hr/>
            <h1>Total cost: &nbsp;<span>${taxable + taxed}</span></h1>
            <button onClick={() => {setVisibility()
              resetCart()
            makeOrder()}
            }>Place Order</button>
          </div>
        </>
    )
 }

 export default Order;