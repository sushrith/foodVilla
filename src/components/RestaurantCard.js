import React, { useContext } from 'react'
import { IMG_CDN_URL } from '../constants';
import UserContext from '../utils/UserContext';
const RestaurantCard =({name,cuisines,cloudinaryImageId,avgRatingString})=>{
        const {user} = useContext(UserContext);
    return(
            <div className='h-[400px] w-56 p-2 m-2 shadow-lg bg-pink-50 flex flex-col justify-evenly'>
                    <img className='h-[200px] w-56' src={IMG_CDN_URL+cloudinaryImageId}/>
                    <span className='text-center'>
                    <h2 className='font-bold text-xl'>{name}</h2>
                    <h3>{cuisines.join(", ")}</h3>
                    <h4>{avgRatingString} stars</h4>
                    <h4>{user.name}</h4>
                    </span>
            </div>
    )
} 
export default RestaurantCard;