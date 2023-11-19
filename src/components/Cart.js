import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../constants';
import AddButton from './AddButton';
import PriceCalculator from './PriceCalculator';


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

  return (
  <>
  <div className="flex">
    <div className='border-gray-100 w-5/12 ml-[12%]'>
    <h3 className='text-center font-bold text-xl bg-pink-50 p-2 my-5'>Cart</h3>   
    {  cartItems.map((item)=>{
        return (
        <div key={item.id} className='flex border-gray-100 border-2 justify-between my-2 shadow-md rounded-lg'>
        <span>
            <ul className='font-bold'>{item.name}</ul>
            <ul className='font-bold'>Rs {item.price/100}</ul>
            <AddButton item={item}/>
        </span>
            <img className='w-36' src={IMG_CDN_URL+item.imageId}/>
        </div>
        );})}
    </div>
    <PriceCalculator/>

    </div>
    </>
  )
}

export default Cart