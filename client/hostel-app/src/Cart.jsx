import { useState } from "react";
import CartProducts from "./Cartproducts.jsx";
import Order from "./Order.jsx";
import Submitted from "./submitted.jsx";

function Cart(props) {
  const [shipping, setShipping] = useState("delivery");
  const [visible, setVisible] = useState(false);

  const handleShipping = (e) => {
    setShipping(e.target.value);
  };
  return (
    <>
      <main className="cart-container">
        <h1 className="review-orders">REVIEW ORDERS</h1>
        <div className="cart-container-div">
          <section className="section-1">
            <CartProducts
              shipping={shipping}
              handleShipping={handleShipping}
              cart={props.cart}
              delete={props.delete}
            />
          </section>
          <section className="section-2">
            <Order
              setVisible={setVisible}
              shipping={shipping}
              totalQuantity={props.totalQuantity}
              totalPrice={props.totalPrice}
              cart={props.cart}
              setCart={props.setCart}
            />
            <div
              className={` ${
                /*props.totalQuantity > 0 &&*/ visible ? "visible" : "hidden"
              }`}
            >
              <Submitted />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Cart;
