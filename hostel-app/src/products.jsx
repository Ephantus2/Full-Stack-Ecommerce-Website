import React from "react";
import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import oppo from './assets/IMG-20250828-WA0035.jpg';
import redmi from './assets/IMG-20250830-WA0019.jpg';
import samsung from "./assets/IMG-20250831-WA0073.jpg";
import laptop2 from "./assets/IMG-20250831-WA0069.jpg";
import laptop1 from './assets/IMG-20250831-WA0071.jpg';
import fridge from "./assets/IMG-20250831-WA0048.jpg";
import fashion from './assets/IMG-20250901-WA0021.jpg';
import iron from "./assets/IMG-20250831-WA0074.jpg";
import sneakers from './assets/IMG-20250901-WA0024.jpg';
import leather from "./assets/IMG-20250901-WA0017.jpg";
import lg from "./assets/IMG-20250829-WA0009.jpg";
import lyons from "./assets/IMG-20250829-WA0011.jpg";



function Products(){
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)

  const addToCart = (productName) => {
    setCart(c => {
      const existingItem = c.find(item => item.productName == productName);
      if(existingItem){
        return c.map(item => {
          return item.productName == productName ? {...item, quantity: item.quantity + 1} : item;
        })
      }else{
        return [...c, {productName, quantity: 1}]
      }
    })
  }

  

  useEffect(() => {
    const totalQuantity = cart.reduce((sum, current) => sum + current.quantity, 0)
    setCartQuantity(totalQuantity)
    localStorage.setItem("cartQuantity", totalQuantity)
    window.dispatchEvent(new Event("cartQuantityChanged"))
  }, [cart])
    
const products = [
        {
            image : oppo,
            description : "OPPO A3x",
            offer: "free headphones and phone cover",
            rating: "3.5",
            price : 100
        },
        {
            image : redmi,
            description : "REDMI 15C",
            offer: "free wireless earphones",
            rating: "4",
            price : 120
        },
         {
            image : samsung,
            description : "SAMSUNG CALAXY A05",
            offer: "free bluetooth speaker",
            rating: "2.5",
            price : 200
        },
          {
            image : laptop1,
            description : "Hp Elitebook",
            offer: "free laptop bag and wireless mouse",
            rating: "4.5",
            price : 300
        },
          {
            image : laptop2,
            description : "Hp probook",
            offer:"free laptop bag and wireless mouse",
            rating: "5",
            price: 350
        },
        {
            image : lg,
            description : "45-inch LG smart TV",
            offer: "free 6 months subscription",
            rating: "4.5",
            price : 600
        },
         {
            image : lyons,
            description : "Lyons sub-woofer",
            offer: "free 64-gb flash",
            rating: "4",
            price : 120
        },
          {
            image : fridge,
            description : "cool fridge",
            offer: "15% discount",
            rating: "4",
            price : 700
        },
         {
            image : iron,
            description : "fashion",
            offer: "10% discount",
            rating: "3.5",
            price: 30
        },
          {
            image : fashion,
            description : "fashion",
            offer: "5% discount",
            rating: "2.5",
            price: 15
        },
        {
            image : sneakers,
            description : "sneaker boots",
            offer: "free naivas shopping bag",
            rating: "4.5",
            price: 35
        },
        {
            image : leather,
            description : "leather shoes",
            offer: "free two-pairs socks",
            rating: "5",
            price: 45
        }
    ]
    return(
      <section className="products-section">
        <SectionHeader
          title = "CHOOSE FROM OUR PRODUCTS"
          subtitle = "experience our exclusive offers"
        />
        <div className="products">
        {products.map((product,index) => (
            <ProductsCard
            key ={index}
            image ={product.image}
            description = {product.description}
            offer = {product.offer}
            price = {product.price}
            rating = {product.rating}

            addToCart = {addToCart}
            />
        ))}
        </div>
      </section>
    )
}

export default Products;
