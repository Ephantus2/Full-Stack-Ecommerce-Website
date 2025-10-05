import naivas_logo from "./assets/naivas-logo.jpg";
import search_icon from "./assets/search-icon.png";
import cart_icon from "./assets/cart-icon.png"
function Header(){
    return(
        <div className="header-container">
            <div className='naivas-div'>
              <img className="naivas-icon" src={naivas_logo}/>
            </div>
            <div className="input-div">
                <input
                type="text"
                placeholder="serch category"/>
                <button className="search-button"><img className="search-icon" src ={search_icon}/></button>
            </div>
            <div className="cart-div">
                <button className="cart-button"><img className="cart-icon" src={cart_icon}/></button>
            </div>
        </div>
    )
}
export default Header;