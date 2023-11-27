"use client"
import React, { useContext } from 'react';
import { ShopContext } from '@app/context/ShopContextProvider';
import Cart from '../page';
import PRODUCTS from '@app/Products';
// import * as work from '@components/HeadPhoneDetailSecondSection'


function CartItem(props) {
    // const [id] = props.data;

    const returnId =PRODUCTS.map((product) => product.id);
    console.log(returnId,"=======this is returnId")
    function returnIdsFromArray(array) {
        const individualIds = [];
        for (let i = 0; i < array.length; i++) {
            individualIds.push(array[i]); // Output: Each individual element in the array
        }
        return individualIds;
    }

const id = returnIdsFromArray(returnId)
console.log(id, "=====this is the id needed")
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

  return (
    <div>
        <div>
            <div>
                <img src={props.img} alt="headphone picture" />
            </div>
            <div>
                <p><b>{props.name}</b></p>
                <p>${props.price}</p>
            </div>
        </div>
        <div>
            <button onClick = {() => removeFromCart(id)}>-</button>
            <input type="text" value={cartItems[id] } onChange={(e)=> updateCartItemCount(Number(e.target.value), id)} />
            <button onClick = {() => addToCart(id)}>+</button>
        </div>
        
    </div>
  )
}

export default CartItem