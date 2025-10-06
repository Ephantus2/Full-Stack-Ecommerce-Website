import screen from "./assets/IMG-20250829-WA0009.jpg"
import { useState } from "react";

function CartProducts(){
    const [shipping, setShipping] = useState("delivery")

    const handleShipping = (e) => {
        setShipping(e.target.value)
    }
    return(
        <>
        <div className="cart-orders-section">
        <div className="cart-image-container">
            <div><img src={screen}/></div>
        </div>
        <div className="div2">
          <h3>45-inch LG smart TV</h3>
          <h3>$50</h3>
          <div>
            <p>quantity: 1</p>
         </div>
         <button>update</button>
         <button>delete</button>
        </div>
        <div className="div3">
            <label>
                <input type="radio" value={"delivery"} onChange={handleShipping} checked={shipping == "delivery" ? true : false}/>
                delivery
            </label><br/>
            <label>
                <input type="radio" value={"pick up"} onChange={handleShipping} checked={shipping == "pick up" ? true : false}/>
                pick up
            </label>
            <p>shipping : {shipping}</p>
        </div>
        </div>
        
        </>
    )
}

export default CartProducts;