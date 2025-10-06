 

 function Order(){
    return(
        <>
          <div className="total-container">
            <p>Items(1) :<span>$50</span></p>
            <p>Delivery & Shipping :<span>$5</span></p>
            <p>Total before tax : <span>$55</span></p>
            <p>Estimated tax(10%) : <span>$5.5</span></p>
            <hr/>
            <h1>Total cost: <span>$60.5</span></h1>
            <button>Place Order</button>
          </div>
        </>
    )
 }

 export default Order;