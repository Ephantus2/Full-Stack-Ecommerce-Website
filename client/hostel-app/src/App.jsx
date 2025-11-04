import Products from "./products";
import Header from "./header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import Register from "./Register";
import Returns from "./Returns";
import axios from './axios'

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totaPrice, setTotalPrice] = useState(0);
  const [orderCart, setOrderCart] = useState(() => {
      let item = localStorage.getItem('order');
      return item ? JSON.parse(item) : [];
    })

  const addToCart = (product) => {
    setCart((c) => {
      const existingItem = c.find(
        (item) => item.productName == product.description
      );
      if (existingItem) {
        return c.map((item) => {
          return item.productName == product.description
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [
          ...c,
          {
            productName: product.description,
            image: product.image,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  const deleteProduct = (item) => {
    setCart((c) => {
      return c
        .map((product) => {
          if (product.productName == item.productName) {
            if (product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return null;
            }
          }
          return product;
        })
        .filter((product) => product !== null);
    });
  };

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

  const [products, setProducts] = useState([])

  const getProductsFromDb = async () => {
    try{
     const response = await axios.get('/store/products/')
     const data = await response.data
     setProducts(data)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getProductsFromDb()
  }, [])

 /* const products = [
    {
      image: "/assets/IMG-20250828-WA0035.jpg",
      description: "OPPO A3x",
      offer: "free headphones and phone cover",
      rating: "3.5",
      price: 100,
    },
    {
      image: "/assets/IMG-20250830-WA0019.jpg",
      description: "REDMI 15C",
      offer: "free wireless earphones",
      rating: "4",
      price: 120,
    },
    {
      image: "/assets/IMG-20250831-WA0073.jpg",
      description: "SAMSUNG CALAXY A05",
      offer: "free bluetooth speaker",
      rating: "2.5",
      price: 200,
    },
    {
      image: "/assets/IMG-20250831-WA0069.jpg",
      description: "Hp Elitebook",
      offer: "free laptop bag and wireless mouse",
      rating: "4.5",
      price: 300,
    },
    {
      image: "/assets/IMG-20250831-WA0069.jpg",
      description: "Hp probook",
      offer: "free laptop bag and wireless mouse",
      rating: "5",
      price: 350,
    },
    {
      image: "/assets/IMG-20250829-WA0009.jpg",
      description: "45-inch LG smart TV",
      offer: "free 6 months subscription",
      rating: "4.5",
      price: 600,
    },
    {
      image: "/assets/IMG-20250829-WA0011.jpg",
      description: "Lyons sub-woofer",
      offer: "free 64-gb flash",
      rating: "4",
      price: 120,
    },
    {
      image: "/assets/IMG-20250831-WA0048.jpg",
      description: "cool fridge",
      offer: "15% discount",
      rating: "4",
      price: 700,
    },
    {
      image: "/assets/IMG-20250831-WA0074.jpg",
      description: "fashion",
      offer: "10% discount",
      rating: "3.5",
      price: 30,
    },
    {
      image: "/assets/IMG-20250901-WA0021.jpg",
      description: "fashion2",
      offer: "5% discount",
      rating: "2.5",
      price: 15,
    },
    {
      image: "/assets/IMG-20250901-WA0024.jpg",
      description: "sneaker boots",
      offer: "free naivas shopping bag",
      rating: "4.5",
      price: 35,
    },
    {
      image: "/assets/IMG-20250901-WA0017.jpg",
      description: "leather shoes",
      offer: "free two-pairs socks",
      rating: "5",
      price: 45,
    },
    {
      image: "/assets/cooker.jpg",
      description:
        "Lyons GK-012 Stainless Steel Double Burner Gas Cooker Table Top Gas Stove -Grey",
      offer: "1 Year WRTY",
      rating: "3.5",
      price: 150,
    },
    {
      image: "/assets/coffeetable2.jpg",
      description: "Zippy Elegant Coffee Table",
      offer: "1 Year WRTY",
      rating: "4.5",
      price: 650,
    },
    {
      image: "/assets/fan.jpg",
      description: "Roch RCF-2404, 24 Ceiling Fan - Ivory And Brown (1YR WRTY)",
      offer: "1 Year WRTY",
      rating: "4.5",
      price: 150,
    },
    {
      image: "/assets/coffeetable1.jpg",
      description: "Coffee table",
      offer: "1 Year WRTY",
      rating: "5",
      price: 750,
    },
    {
      image: "/assets/flashdisk.jpg",
      description:
        "128GB usb Flash Drive metal hook with 3 in 1 OTG adapter usb cable",
      offer: "free 64GB sd card",
      rating: "4",
      price: 60,
    },
    {
      image: "/assets/pinkcups.jpg",
      description: "Sundabest Pink Coffee Cups, Set Of 6 ",
      offer: "4 free cups",
      rating: "5",
      price: 40,
    },
    {
      image: "/assets/bluecups.jpg",
      description:
        "Nice One Set of 6pcs 370ML Coffee Mugs High Quality Porcelain Milk Tea Cups",
      offer: "3 free cups",
      rating: "4",
      price: 35,
    },
    {
      image: "/assets/duvet.jpg",
      description: "High quality white duvet blanket, 1 bedsheet 2 pillowcases",
      offer: "3 free pillows",
      rating: "5",
      price: 200,
    },
  ];
*/
  return (
    <>

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Header cartQuantity={cartQuantity} />
            <Products products={products} addToCart={addToCart} />
           </>
          }
          />
          <Route
            path="/cart"
            element={
              <>
              <Header cartQuantity={cartQuantity} />
              <Cart
                totalQuantity={cartQuantity}
                totalPrice={totaPrice}
                cart={cart}
                delete={deleteProduct}
                setCart={setCart}
              />
              </>
            }
          />
          <Route path="orders/" element={
            <>
            <Header cartQuantity={cartQuantity} />
            <Returns orderCart={orderCart}
                    setOrderCart={setOrderCart}/>
            </>
           
            } />
          <Route path="auth/login" element={<Register />} />
          <Route path="auth/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
