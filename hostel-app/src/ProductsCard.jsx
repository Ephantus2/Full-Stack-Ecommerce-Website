import React from "react";
import star_rating_0 from "./assets/star-rating-0.png";
//import star_rating_0.5 from "./assets/star-rating-0.5.png";
import star_rating_1 from "./assets/star-rating-1.png";
//import star_rating_1.5 from "./assets/star-rating-1.5.png";
import star_rating_2 from "./assets/star-rating-2.png";
//import star_rating_2.5 from "./assets/star-rating-2.5.png";
import star_rating_3 from "./assets/star-rating-3.png";
//import star_rating_3.5 from "./assets/star-rating-3.5.png";
import star_rating_4 from "./assets/star-rating-4.png";
//import star_rating_4.5 from "./assets/star-rating-4.5.png";
import star_rating_5 from "./assets/star-rating-5.png";

function ProductsCard(props){

    let srcs = [star_rating_0,star_rating_1,star_rating_2,star_rating_3,star_rating_4,star_rating_5]
    
    return(
        
        <div className="products-card">
            <img className="photo" src={props.image}/>
            <h4>{props.description}</h4>
            <p>{props.offer}</p>
            <img className="rating" src={srcs[props.rating]}/>
            <h4>${props.price}</h4>
            <div className="add-button-div"><button>Add To Cart</button></div>
            
        </div>
    );
}

export default ProductsCard;