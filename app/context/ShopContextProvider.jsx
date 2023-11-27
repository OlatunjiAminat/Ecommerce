"use client"
import { createContext, useState } from 'react';
import PRODUCTS from '@app/Products';




export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

// const getIdValue = PRODUCTS.map((product) => product.id);
// const id = getIdValue;


function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart())


    

    const getTotalCartAmount = () => { //to be used later
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    // }formal

    // const addToCart = (itemId) => {
    //     setCartItems((prev) => ({
    //       ...prev,
    //       [itemId]: prev[itemId] + 1 >= 0 ? prev[itemId] + 1 : 0 // Ensuring the count doesn't go below zero
    //     }));
    //   };
    
    
    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    // }Formal

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: prev[itemId] - 1 >= 0 ? prev[itemId] - 1 : 0 // Ensuring the count doesn't go below zero
        }));
      };
    
    // const updateCartItemCount = (newAmount, itemId) => {
    //     setCartItems((prev) => ({...prev, [itemId]: newAmount})) 
    // }Formal


    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: newAmount >= 0 ? newAmount : 0 // Ensuring the count doesn't go below zero
        }));
      };
    

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> 

}

export default ShopContextProvider