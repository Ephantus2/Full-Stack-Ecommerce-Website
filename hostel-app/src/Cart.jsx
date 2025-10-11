import CartProducts from "./Cartproducts.jsx";
import Order from "./Order.jsx";

function Cart(props){
    return(
        <>
        <main className="cart-container">
            <h1 className="review-orders">REVIEW ORDERS</h1>
            <div className="cart-container-div">
            <section className="section-1">
                <CartProducts cart={props.cart} delete={props.delete}/>
            </section>
            <section className="section-2">
                <Order totalQuantity={props.totalQuantity} totalPrice={props.totalPrice} />
            </section>
            </div>
            
        </main>

        </>
    )
}

export default Cart;