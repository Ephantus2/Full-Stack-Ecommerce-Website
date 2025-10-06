import Products from "./products"
import Header from "./header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./Cart";

function App() {

  return (
    <>
    <Header/>
     <Router>
      <Routes>
        <Route path = "/" element = {<Products />}/>
        <Route path = "/cart" element = {<Cart />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
