"use client"
import React, { useContext, useState } from 'react';
import PRODUCTS from '@app/Products'
import CartItem from './cartItem/page';
import { ShopContext } from '@app/context/ShopContextProvider';




// function Cart() {
// const {cartItems} = useContext(ShopContext)

//   return (
//     <div>
//         <div>
//             <h1>OUR Cart</h1>
//         </div>
        {/* <div>
            {PRODUCTS.map(product => {
                if (cartItems[product.id] !== 0){
                return <CartItem img={product.productImage} name={product.productName} price={product.price}  key={product.id} />
            }
        })}
        </div> */}
//         <div>
//             {PRODUCTS.map(product => <CartItem img={product.productImage} name={product.productName} price={product.price}  key={product.id} />)}

//         </div>
//     </div>
//   )
// }

// export default Cart


function Cart() {
    const { cartItems } = useContext(ShopContext);
    const [showCart, setShowCart] = useState(false);
    console.log(showCart, "=====this is showCart")
    const toggleCart = () => {
      setShowCart(!showCart);
    };
  console.log(cartItems, "=======cart items")
    return (
      <div className='cart-container'>
        <img src='/cart-icon.png' alt='Cart' onClick={toggleCart} />
  
        {showCart && (
          <div className='cart-items'>
            <h2>Cart Items</h2>
            <ul>
              {Object.entries(cartItems).map(([itemId, quantity]) => (
                <li key={itemId}>
                  Item ID: {itemId}, Quantity: {quantity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default Cart;



// function Cart() {
//     const { cartItems } = useContext(ShopContext);
//     const [showCart, setShowCart] = useState(false);
  
//     const toggleCart = () => {
//       setShowCart(!showCart);
//     };
  
//     return (
//       <div className='cart-container'>
//         <img src='/cart-icon.png' alt='Cart' onClick={toggleCart} />
  
//         {showCart && (
//           <div className='cart-items'>
//             <h2>Cart Items</h2>
//             <ul>
//               {Object.entries(cartItems).map(([itemId, quantity]) => {
//                 const selectedItem = PRODUCTS.find((product) => product.id === Number(itemId));
//                 if (!selectedItem) {
//                   // If selectedItem is not found, skip rendering this item
//                   return null;
//                 }
//                 return (
//                   <li key={itemId}>
//                     <img src={selectedItem.productImage} alt={selectedItem.name} />
//                     <p>Name: {selectedItem.productName}</p>
//                     <p>Price: ${selectedItem.price}</p>
//                     <p>Quantity: {quantity}</p>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default Cart;