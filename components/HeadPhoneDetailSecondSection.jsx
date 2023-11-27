"use client"
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { ShopContext } from '@app/context/ShopContextProvider';
import PRODUCTS from '@app/Products';
import Link from 'next/link';


    const returnId =PRODUCTS.map((product) => product.id);


   function returnIdsFromArray(array) {
        const individualIds = [];
        for (let i = 0; i < array.length; i++) {
            individualIds.push(array[i]); // Output: Each individual element in the array
        }
        return individualIds;
    }

const id = returnIdsFromArray(returnId)
console.log(id, "++++++++++this is the id")

function HeadPhoneDetailSecondSection() {
    const {addToCart, cartItems, removeFromCart, updateCartItemCount} = useContext(ShopContext)
    const cartItemAmount = cartItems[id] || 0;

    const [placeHolder, setPlaceHolder] = useState(cartItemAmount) 
    // function increase(itemId) {
    //      setPlaceHolder((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    // }


    // function decrease(itemId) {
    //     setPlaceHolder((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    // } 

    // 
    
    function increase() {
        setPlaceHolder((prev) => prev + 1);
        updateCartItemCount(placeHolder + 1, id);
      }
    
      function decrease() {
        if (placeHolder > 0) {
          setPlaceHolder((prev) => prev - 1);
          updateCartItemCount(placeHolder - 1, id);
        }
      }
  return (
    <div className=''>
        <div className='md:flex justify-start items-center md:mx-12 lg:mt-2 lg:mx-8'>
            <div className='bg-deep-white flex justify-center items-center md:max-w-[50%] md:px-20 md:py-32 py-5  rounded-lg lg:px-32 lg:py-20 mx-auto max-w-[300px]'>
                <Image src="/headphone1.png" alt="headphone" width={150} height={5} loading="lazy" className='lg:w-[500px]'  />
            </div>
            <div className='ml-8 md:max-w-[40%] lg:ml-6'>
                <div className='mt-8 mb-5 '>
                    <p className='text-deep-brown tracking-[0.5em] lg:text-start'>NEW PRODUCT</p>
                </div>
                <div>
                    <h2 className='font-thin my-2 text-xl pb-3 lg:text-start text-deep-black'>XX99 MARK II <br/> HEADPHONES</h2>
                </div>
                <div className='mr-8 md:max-w-[80%] md:mr-0 lg:text-start lg:mx-0'>
                    <p className='text-gray-600 text-deep-white text-sm lg:text-start lg:max-w-[380px] lg:text-lg'>The new XX99 Mark II is the pinnacle of prinstine audio.It redefines your premium headphones experience by reproducing the balanced depth and precision of studio quality sound.</p>
                </div>
                <div className='mt-3  lg:text-start mb-4 lg:mx-0'>
                    <p className='font-bold'>$2,999</p>
                </div>
                <div className='flex justify-start items-center mb-16' >
                    <div className='bg-gray-600 max-w-[70px] mr-2'>
                        <button onClick = {decrease} className='px-2 hover:bg-light-brown'>-</button><input type="text" placeholder = {placeHolder} value={placeHolder} onChange={(e) => setPlaceHolder(Number(e.target.value))}className='pl-2 max-w-[23px] bg-gray-600 placeholder-black hover:bg-light-brown' /><button onClick = {increase} className='px-2 hover:bg-light-brown'>+</button>
                    </div>
                    <div>
                        <Link href="/cart"><button  className='bg-deep-brown px-3 py-2 text-white text-xs lg:py-3 lg:px-4 hover:bg-light-brown'>ADD TO CART {cartItemAmount > 0 && <>({cartItemAmount})</>}</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeadPhoneDetailSecondSection

