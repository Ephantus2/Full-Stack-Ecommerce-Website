import React, {useEffect, useState} from 'react'
import styles from './Returns.module.css'

const Returns = (props) => {
    let orderCart = props.orderCart;
    let setOrderCart = props.setOrderCart;
  return (
    <div id='orders' className={styles.orders2}>
       <div className={styles.ordersContainer}>
           {orderCart.map((order, index) => (
            <div className={styles.ordersContainer2}>
                <div className={styles.ordersContainer3}>
                    <div className={styles.ordersContainer3_1}>
                        <div>Order id:</div>
                        <div>{order.id}</div>
                        </div>
                    <div className={styles.ordersContainer3_1}>
                        <div>Order Date:</div>
                        <div>{order.date}</div>
                        </div>
                </div>
                <div className={styles.ordersContainer4}>
                    {order.product.map((p, index)=> (
                        <div className={styles.ordersContainer4_1}>
                            <div className={styles.divImg}>{p.productName}</div>
                            <div className={styles.divImg}><img src={`http://127.0.0.1:8000${p.image}`}/></div>
                            <div className={styles.divImg}>Price: {p.price}</div>
                            <div className={styles.divImg}>Quantity: {p.quantity}</div>
                        </div>
                    ))}
                </div>
            </div>
           ))}
       </div>
    </div>
  )
}

export default Returns