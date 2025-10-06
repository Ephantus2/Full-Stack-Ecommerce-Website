import React from "react";
import { useState,useEffect} from "react";
import star_rating_00 from "./assets/star-rating-0.png";
import star_rating_05 from "./assets/half-star-rating.png";
import star_rating_10 from "./assets/star-rating-1.png";
import star_rating_15 from "./assets/one-half-star.png";
import star_rating_20 from "./assets/star-rating-2.png";
import star_rating_25 from "./assets/two-half-star.png";
import star_rating_30 from "./assets/star-rating-3.png";
import star_rating_35 from "./assets/three-half-star.png";
import star_rating_40 from "./assets/star-rating-4.png";
import star_rating_45 from "./assets/four-half-star.png";
import star_rating_50 from "./assets/star-rating-5.png";

function ProductsCard(props){
    const [cart, setCart] = useState([])

    let srcs = {
        "0" : star_rating_00,
        "0.5" : star_rating_05,
        "1" : star_rating_10,
        "1.5" : star_rating_15,
        "2" : star_rating_20,
        "2.5" : star_rating_25,
        "3" : star_rating_30,
        "3.5" : star_rating_35,
        "4" : star_rating_40,
        "4.5" : star_rating_45,
        "5": star_rating_50
    }
    
    function handleCart(){
        props.addToCart(props.description)
    }
 
   

    
    return(
        
        <div className="products-card">
            <img className="photo" src={props.image}/>
            <h4>{props.description}</h4>
            <p>{props.offer}</p>
            <img className="rating" src={srcs[props.rating]}/>
            <h4>${props.price}</h4>
            <div className="add-button-div"><button onClick={handleCart}>Add To Cart</button></div>
            
        </div>
    );
}

export default ProductsCard;