import { useState, useEffect } from "react";
import naivas_logo from "./assets/naivas-logo.jpg";
import search_icon from "./assets/search-line-icon.png";
import cart_icon from "./assets/cart-icon.png";
import axios from './axios'
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [hamberger, setHamberger] = useState(false);
  useEffect(() => {
    setCartQuantity(props.cartQuantity);
  }, [props.cartQuantity]);

  const navigate = useNavigate()

  useEffect(()=>{
     if(hamberger){
      document.body.style.overflow = 'hidden'
     }else{
      document.body.style.overflow = 'auto'
     }

     return () => {
      document.body.style.overflow = 'auto'
     }
  }, [hamberger])

  const handleLogout = async () => {
    try{
    const response = await axios.post('/accounts/logout/');
    alert('logout successfully')
    navigate('/auth/login')
    }catch(err){
      alert('failed to logout')
    }
  }

  return (
    <>
      <div className="header-container">
        <div className="naivas-div">
          <a href="/">
            <img className="naivas-icon" src={naivas_logo} />
          </a>
        </div>
        <div className="input-div">
          <input type="text" placeholder="search category" />
          <button className="search-button">
            <img className="search-icon" src={search_icon} />
          </button>
        </div>
        <div className="others">
          <div className="orders">
            <button>
              <a href="orders">
                Returns
                <br />
                <span>& Orders</span>
              </a>
            </button>
          </div>
          <div className="cart-div">
            <button className="cart-button">
              <a href="/cart">
                <img className="cart-icon" src={cart_icon} />
              </a>
            </button>
            <h4 className="cart-count">
              {cartQuantity < 10 ? cartQuantity : "9+"}
            </h4>
          </div>
          <div className="hamberger-menu">
            <button onClick={() => setHamberger(true)}>
              <img src="hamberger.jpeg" />
            </button>
          </div>
        </div>
      </div>
      <div className={`hamberger ${hamberger ? "visible" : "hidden"}`}>
        <div
          className={`hamberger1 ${
            hamberger ? "show_hamberger" : "hide_hamberger"
          }`}
        >
          <div className="h_div2">
          <button className="button_1" onClick={() => setHamberger(false)}>
            x
          </button>
          </div>
          <div className="h_div h_div1">
            <a>Home</a>
          </div>
          <div className="h_div">
            <a>Products</a>
          </div>
          <div className="h_div">
            <a>Cart</a>
          </div>
          <div className="h_div">
            <a>orders</a>
          </div>
          <div className="h_div" onClick={handleLogout}>
            <button className="logout">Logout</button>
          </div>
        </div>
        <div className={`overlay2 ${hamberger? 'visible' : 'hidden'}`} onClick={() => setHamberger(false)}></div>
      </div>
    </>
  );
}
export default Header;
