import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const existingItem = state.cart.find(
                (item) => item.productName == product.description
            );
            if (existingItem) {
                existingItem.quantity += 1
            }else{
         state.cart.push({
          id: product.id,
          productName: product.description,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
            }
        },
    
    deleteProduct: (state, action) => {
      const item = action.payload;
      state.cart = state.cart
        .map((product) => {
          if (product.productName === item.productName) {
            if (product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return null;
            }
          }
          return product;
        })
        .filter((product) => product !== null);
    },
   setCart: (state, action) => {
    state.cart = action.payload
   }
    }
})

export const {addToCart, deleteProduct, setCart} = cartSlice.actions
export default cartSlice.reducer