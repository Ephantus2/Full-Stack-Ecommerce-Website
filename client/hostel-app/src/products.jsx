import React from "react";
import ProductsCard from "./ProductsCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice.js";


function Products(props){
  const dispatch = useDispatch()
 
    
return(
      <section id="products" className="products-section">
        <SectionHeader
          title = "CHOOSE FROM OUR PRODUCTS"
          subtitle = "experience our exclusive offers"
        />
        <div className="products">
        {props.products.map((product,index) => (
            <ProductsCard
            key ={index}
            image ={product.image}
            description = {product.description}
            offer = {product.offer}
            price = {product.price}
            rating = {product.rating}

            addToCart = {() => dispatch(addToCart(product))}
            />
        ))}
        </div>
      </section>
    )
}

export default Products;
