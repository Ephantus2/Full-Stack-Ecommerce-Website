import Products from "./products";
import Header from "./header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import Register from "./Register";
import Returns from "./Returns";
import axios from "./axios";
import { useSelector, useDispatch } from "react-redux";
import Protected from "./Protected";
import { setProducts } from "./redux/productsSlice";

function App() {
  //get cart from redux store
  const cart = useSelector((state) => state.cart.cart);

  const [cartQuantity, setCartQuantity] = useState(0);
  const [totaPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const totalQuantity = cart.reduce(
      (sum, current) => sum + current.quantity,
      0
    );
    setCartQuantity(totalQuantity);
    const total = cart.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  const user = useSelector((state) => state.user.user);

  //fetch all products from the database
  const getProductsFromDb = async () => {
    try {
      const response = await axios.get("/store/products/");
      const data = await response.data;
      dispatch(setProducts(data));
    } catch (err) {
      alert("server not running");
    }
  };

  // on load display all products
  useEffect(() => {
    getProductsFromDb();
  }, [user]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <>
                  <Header cartQuantity={cartQuantity} />
                  <Products />
                </>
              </Protected>
            }
          />
          <Route
            path="/cart"
            element={
              <Protected>
                <>
                <Header cartQuantity={cartQuantity} />
                <Cart totalQuantity={cartQuantity} totalPrice={totaPrice} />
              </>
              </Protected>
              
            }
          />
          <Route
            path="orders/"
            element={
              <Protected>
                <>
                <Header cartQuantity={cartQuantity} />
                <Returns />
              </>
              </Protected>
              
            }
          />
          <Route path="auth/login" element={<Register />} />
          <Route path="auth/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
