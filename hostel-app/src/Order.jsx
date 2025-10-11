

 function Order(props){
   let shippingPrice = props.totalQuantity > 0 && props.shipping == "delivery" ? 5 : 0;
   let taxable = props.totalPrice + shippingPrice
   let taxed = taxable * 0.1
    return(
        <>
          <div className="total-container">
            <p>Items({props.totalQuantity}) :<span>${props.totalPrice}</span></p>
            <p>Delivery & Shipping :<span>${ shippingPrice }</span></p>
            <p>Total before tax : <span>${ taxable }</span></p>
            <p>Estimated tax(10%) : <span>${taxed}</span></p>
            <hr/>
            <h1>Total cost: <span>${taxable + taxed}</span></h1>
            <button onClick={() => props.setVisible(true)}>Place Order</button>
          </div>
        </>
    )
 }

 export default Order;