import CartProducts from "./Cartproducts.jsx";
import Order from "./Order.jsx";

function Cart(){
    return(
        <>
        <main className="cart-container">
            <h1 className="review-orders">REVIEW ORDERS</h1>
            <div className="cart-container-div">
            <section className="section-1">
                <CartProducts/>
            </section>
            <section className="section-2">
                <Order/>
            </section>
            </div>
            
        </main>

        </>
    )
}

export default Cart;