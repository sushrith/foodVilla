import React from 'react'
import { useSelector } from 'react-redux'

const PriceCalculator = () => {
    const cartItems = useSelector(store=>store.cart.items);
    const count = useSelector(store=>store.cart.count);
    const total = useSelector(store => store.cart.total);
  return (
    <div className="bg-pink-50 p-2 m-5 w-[40%] flex flex-col flex-wrap">
        <h1 className="text-center font-bold text-xl">Cart Details</h1>
        {cartItems.map((item,index)=>{
            return (
                <span className ="flex justify-between">
                <p className="text-sm py-2 m-2">{item.name} x {count[item.id]}   </p>
                <p>Rs {((item.price/100)*count[item.id]).toFixed(2)}</p>
                </span>
            )
        })}
        <hr className="m-2 border border-black"></hr>
        <span className="flex justify-between">Total  
        <span>
            Rs   {total}
        </span>
        </span>
        <span className="flex justify-center">
        <button className="bg-green-400 cursor-pointer p-2 rounded-md shadow-md text-center">Pay Now</button>
        </span>
    </div>
  )
}

export default PriceCalculator