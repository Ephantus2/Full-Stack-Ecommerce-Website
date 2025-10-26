import green_tick from "./assets/green-tick.png"
import { useState } from "react";

function Submitted(){

    const [visible, setVisible] = useState(true);
    
    return(
        <>
        <div className={`submit-div ${visible ? 'visible' : 'hidden'}`}>
            <h2>Order Placed</h2>
            <div>
            <img src={green_tick}/>
            </div>
            <button onClick={() => setVisible(false)}>x</button>
        </div>
        </>
    )
}

export default Submitted;