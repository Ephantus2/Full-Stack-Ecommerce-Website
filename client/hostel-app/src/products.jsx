import React from "react";
import ProductsCard from "./ProductsCard.jsx";
import SectionHeader from "./SectionHeader.jsx";


function Products(props){
 
    
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

            addToCart = {() => props.addToCart(product)}
            />
        ))}
        </div>
      </section>
    )
}

export default Products;
