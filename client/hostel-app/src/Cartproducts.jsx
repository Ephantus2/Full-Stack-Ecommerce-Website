


function CartProducts(props){
    
    let cart = props.cart;
    return(
        <>
        {
        cart.map((item, index) => (
            <li key={index}>
                <div className="cart-orders-section">
        <div className="cart-image-container">
            <div><img src={item.image}/></div>
        </div>
        <div className="div2">
          <h3>{item.productName}</h3>
          <h3>price: ${item.price}</h3>
          <div>
            <p>quantity: {item.quantity}</p>
         </div>
         <button>update</button>
         <button onClick={() => props.delete(item)}>delete</button>
        </div>
        <div className="div3">
            <label>
                <input type="radio" value={"delivery"} onChange={props.handleShipping} checked={props.shipping == "delivery" ? true : false}/>
                delivery
            </label><br/>
            <label>
                <input type="radio" value={"pick up"} onChange={props.handleShipping} checked={props.shipping == "pick up" ? true : false}/>
                pick up
            </label>
            <p>shipping : {props.shipping}</p>
        </div>
        </div>

            </li>
        
            ))
        }
        
        </>
    )
}

export default CartProducts;