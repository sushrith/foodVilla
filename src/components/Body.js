import React, { useContext, useEffect, useState } from 'react'
import restaurantList from '../config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = ()=>{
    const [allRestaurants,setAllRestaurants] = useState([]);   
    const [searchText,setSearchText] = useState('');
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);   
    const {user,setUser} = useContext(UserContext);
    useEffect(()=>{
        getRestaurants();
    },[]);    

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.51325366542118&lng=73.9241474121809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const actualData2 =(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants==undefined)?[]:json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        const actualData1 =json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants==undefined?[]:json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        setAllRestaurants((actualData1.length>actualData2.length)?actualData1:actualData2);
        setFilteredRestaurants((actualData1.length>actualData2.length)?actualData1:actualData2);
    
    }
    const isOnline = useOnline();

    if(!isOnline){
        return <h1>🔴 Offline, please check your internet connection!!</h1>
    }

    if(!allRestaurants) return null;

    return (allRestaurants?.length===0)?<Shimmer/>:(<>
            <div className='text-center p-5 my-5'>
                <input type='text' className='focus:bg-green-50 p-2 m-2 border-2 border-slate-100' placeholder='Search' value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className='p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-green-900' onClick={
                    ()=>{
                        const resList = filterData(searchText,allRestaurants);
                        setFilteredRestaurants(resList);
                    }
                }>Search</button>
                <input value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}></input>
            </div>
            <div className='flex flex-wrap justify-evenly'>
            {
                    filteredRestaurants?.length===0?<h1>No Restaurants Match your Filter!!</h1>:filteredRestaurants.map((restaurant)=>{
                    return <Link to={"restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard key={restaurant.info.id} {...restaurant.info}/></Link>
                    })
            }                                     
            </div>
            </>
    )
}
export default Body;