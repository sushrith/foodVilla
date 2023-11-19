import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

import AddButton from './AddButton';
const RestaurantMenu = () => {

const params = useParams();

const [restaurant,menu] = useRestaurant(params.id);

return (restaurant==null)?<Shimmer/>:(
    <div className='flex flex-col'>
        {/* <h1 className='text-center'>Restaurant id : {params.id}</h1> */}
        <div className='flex justify-between border-gray-100 border-2 w-9/12 ml-[12%] text-center shadow-md rounded-md mt-2'>
            <span>
            <h1 className='font-bold text-center'>{restaurant.name}</h1>
            <img className='w-44 rounded-xl' src={IMG_CDN_URL+restaurant.cloudinaryImageId}></img>
            </span>
            <span>
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwoMessage}</h3></span>
        </div>
        <div>
            <h1 className='font-bold text-3xl text-center my-2'>Menu</h1>
            {  
                menu.map((card,index)=>{
                    let items = (card.card.card.itemCards)?card?.card?.card?.itemCards:[]; 
                    let title = (card.card.card.title)?card.card.card.title:'';
                    return (<div key={index} className='border-gray-100 w-9/12 ml-[12%]'>
                            <h3 className='text-center font-bold text-xl bg-pink-50'>{title}</h3>
                        {   items.map((item,id)=>{
                                return (
                                <div key={id} className='flex border-gray-100 border-2 justify-between my-2 shadow-md rounded-lg'>
                                <span>
                                <ul className='font-bold'>{item.card.info.name}</ul>
                                <ul className='font-extralight'>{item.card.info.description}</ul>
                               <AddButton item={item.card.info}/>
                               </span>
                                <img className='w-36' src={IMG_CDN_URL+item.card.info.imageId}/>
                                </div>)
                            })
                        }
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default RestaurantMenu;