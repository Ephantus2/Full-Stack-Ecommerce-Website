import { useState,useEffect } from "react";
import naivas_logo from "./assets/naivas-logo.jpg";
import search_icon from "./assets/search-line-icon.png";
import cart_icon from "./assets/cart-icon.png"
function Header(props){
    const [cartQuantity, setCartQuantity] = useState(0)
    useEffect(() => {
        setCartQuantity(props.cartQuantity)
         }
    )
    return(
        <div className="header-container">
            <div className='naivas-div'>
              <a href="/"><img className="naivas-icon" src={naivas_logo}/></a>
            </div>
            <div className="input-div">
                <input
                type="text"
                placeholder="search category"/>
                <button className="search-button"><img className="search-icon" src ={search_icon}/></button>
            </div>
            <div className="others">
            <div className="orders">
                <button><a href="orders">Returns<br/><span>& Orders</span></a></button>
            </div>
            <div className="cart-div">
                <button className="cart-button"><a href = "/cart"><img className="cart-icon" src={cart_icon}/></a></button>
                <h4 className="cart-count">{cartQuantity < 10 ? cartQuantity : "9+"}</h4>
            </div>
            </div>
        </div>
    )
}
export default Header;