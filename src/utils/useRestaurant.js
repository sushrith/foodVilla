import { useEffect, useState } from "react";
import { FETCH_MENU } from "../constants";

const useRestaurant = (resId)=>{
    const [restaurant,setRestaurant] = useState(null);
    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU+resId);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    return [restaurant,menu];    
};

export default useRestaurant;